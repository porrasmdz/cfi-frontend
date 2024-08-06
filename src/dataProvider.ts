import { ADDRGETNETWORKPARAMS } from "dns";
import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";
import {
  convertPaginationToApiFilters,
  isComposedSort,
  convertRAFilters,
  ensureSubsortInResourceList,
} from "./commons/utils";

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

    const response = httpClient(url).then(({ headers, json }) => {
      const sort_by: string = params.sort.field;
      const sort_order: string = params.sort.order;
      const sorted_results = ensureSubsortInResourceList(
        sort_by,
        sort_order,
        json.results
      );
      return {
        data: sorted_results,
        total: parseInt(
          headers.get("content-range")?.split("/").pop() || "0",
          10
        ),
      };
    });
    return response;
  },

  getMany: async (resource: any, params: any) => {
    const filter = convertRAFilters({ ids: params.ids });
    const url = `${apiUrl}/${resource}?filters=${JSON.stringify(filter)}`;
    const { json } = await httpClient(url, { signal: params.signal });
    return { data: json.results };
  },

  getManyReference: async (resource: any, params: any) => {

    const query = convertPaginationToApiFilters(params);
    query.filters[params.target] = { value: params.id, match_mode: "eq" };
    const url =
      `${apiUrl}/${resource}?sort_by=${query.sort_by}` +
      `&sort_order=${query.sort_order}` +
      `&skip=${query.skip}` +
      `&limit=${query.limit}` +
      `&filters=${JSON.stringify(query.filters)}`;
    const { json, headers } = await httpClient(url, { signal: params.signal });

    const sort_by: string = params.sort.field;
    const sort_order: string = params.sort.order;
    const sorted_results = ensureSubsortInResourceList(
      sort_by,
      sort_order,
      json.results
    );
    return {
      data: sorted_results,
      total: parseInt(
        headers.get("content-range")?.split("/").pop() || "0",
        10
      ),
    };
  },

  passCyclicCount: async (resource: any, params: any) => {
    const url = `${apiUrl}/${resource}`;
    const { json, headers } = await httpClient(url, { signal: params.signal });
    return json.results;
  },
};
export default customProvider;
