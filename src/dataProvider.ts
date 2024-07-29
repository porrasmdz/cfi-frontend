import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";

const convertPaginationToApiFilters = (params: any) => {
  const { page, perPage } = params.pagination;
  const { field, order } = params.sort;

  //This are sent to my REST API
  const query = {
    sort_by: field,
    sort_order: order === "ASC" ? 1 : 0,
    // sort: JSON.stringify([field, order]),
    skip: (page - 1) * perPage,
    limit: perPage,
    // range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
    filters: params.filter,
  };
  return query
}
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
    //react-admin provides page,perPage, field (orderField) and Order (ASC or DESC)
    //This are received by ra
    const query = convertPaginationToApiFilters(params)
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
  //Eliminate sortby related fields
  getMany: async (resource: any, params: any) => {
    const filter: any = {}
    if(params.ids != null) {
      filter["id"] = {"value": params.ids, "match_mode": "in"}
    }
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
        data: json,
        total: parseInt(headers.get('content-range')?.split('/').pop() || "0", 10),
    };
},
};
export default customProvider;
