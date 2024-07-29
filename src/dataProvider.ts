import { ADDRGETNETWORKPARAMS } from "dns";
import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";
const convertRAFilters = (filters: any) => {
  return Object.fromEntries(
    Object.entries(filters).map(([key, value]) => {
      switch(key) {
        case "ids":
          return ["id", {"value": value, "match_mode":"in"}]
        case "name": 
         return [key, {"value": value,"match_mode":"contains"}]
        case "full_name": 
         return [key, {"value": value,"match_mode":"contains"}]
        default: 
          return [key, {"value": value,"match_mode":"eq"}]
      }
    } )
  );
}
const convertPaginationToApiFilters = (params: any) => {
  //received by ra url params
  const { page, perPage } = params.pagination;
  const { field, order } = params.sort;
  
  //Sent to API
  const filters = convertRAFilters(params.filter)

  const query = {
    sort_by: field,
    sort_order: order === "ASC" ? 1 : 0,
    skip: (page - 1) * perPage,
    limit: perPage,
    filters: filters,
  };
  return query;
};
const apiUrl = import.meta.env.VITE_SIMPLE_REST_URL;

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }

  // const { token } = JSON.parse(localStorage.getItem('auth')|| '');
  // options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider(apiUrl, httpClient);
dataProvider.supportAbortSignal = true;

const customProvider = {
  ...dataProvider,
  getList: async (resource: any, params: any) => {
    const query = convertPaginationToApiFilters(params);
    const url =
      `${apiUrl}/${resource}?sort_by=${query.sort_by}` +
      `&sort_order=${query.sort_order}` +
      `&skip=${query.skip}` +
      `&limit=${query.limit}` +
      `&filters=${JSON.stringify(query.filters)}`;

    const response = httpClient(url).then(({ headers, json }) => ({
      data: json.results,
      total: parseInt(
        headers.get("content-range")?.split("/").pop() || "0",
        10
      ),
    }));
    return response;
  },

  getMany: async (resource: any, params: any) => {
    const filter = convertRAFilters({"ids": params.ids})
    const url = `${apiUrl}/${resource}?filters=${JSON.stringify(filter)}`;
    const { json } = await httpClient(url, { signal: params.signal });
    return { data: json.results };
  },

  getManyReference: async (resource: any, params: any) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${JSON.stringify(query)}`;
    const { json, headers } = await httpClient(url, { signal: params.signal });
    return {
      data: json.results,
      total: parseInt(
        headers.get("content-range")?.split("/").pop() || "0",
        10
      ),
    };
  },
};
export default customProvider;
