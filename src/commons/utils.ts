import { useMediaQuery, Theme } from "@mui/system";
export const isComposedSort = (sort_field?: string) => {
  if (sort_field != null && sort_field.includes(".")) {
    return true;
  }
  return false;
};
export const convertRAFilters = (filters: any) => {
  return Object.fromEntries(
    Object.entries(filters).map(([key, value]) => {
      switch (key) {
        case "ids":
          return ["id", { value: value, match_mode: "in" }];
        case "name":
          return [key, { value: value, match_mode: "contains" }];
        case "full_name":
          return [key, { value: value, match_mode: "contains" }];
        default:
          return [key, { value: value, match_mode: "eq" }];
      }
    })
  );
};
export const convertPaginationToApiFilters = (params: any) => {
  //received by ra url params
  const { page, perPage } = params.pagination;
  const { field, order } = params.sort;

  const filters = convertRAFilters(params.filter);

  const query = {
    sort_by: isComposedSort(field) ? "updated_at" : field,
    sort_order: order === "ASC" ? 1 : 0,
    skip: (page - 1) * perPage,
    limit: perPage,
    filters: filters,
  };
  return query;
};

export const ensureSubsortInResourceList =(sort_by:string, sort_order:string, resource_list:any[]) => {
    if (isComposedSort(sort_by)) {
        const [attribute,sub_attribute] = sort_by.split(".")
        let real_attribute
        switch (attribute) {
          case "corporative_group": 
             real_attribute = "corporate_group";
             break;
          default:
            real_attribute = attribute;
        }
        const sorted_results = resource_list.sort(function (res1:any, res2:any){
          if (res2 == null || res1 == null || res2==undefined || res1 == undefined) {return 0;}
          let name1 = res1[real_attribute][sub_attribute].toLowerCase()
          let name2 = res2[real_attribute][sub_attribute].toLowerCase()
          if (name1 < name2) {return sort_order == "ASC" ? -1 : 1;}
          if (name1 > name2) {return sort_order == "ASC" ? 1 : -1;}
          return 0;
        })
        return  sorted_results;
         
      }
      else {
        return resource_list;
        
      }
}