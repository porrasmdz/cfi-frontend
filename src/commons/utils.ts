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
        case "cyclic_counts":
          return ["id", { value: value, match_mode: "in" }];
        case "name":
          return [key, { value: value, match_mode: "contains" }];
        case "detail":
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

export const ensureSubsortInResourceList = (
  sort_by: string,
  sort_order: string,
  resource_list: any[]
) => {
  if (isComposedSort(sort_by)) {
    const [attribute, sub_attribute] = sort_by.split(".");
    let real_attribute: string;
    let real_list = resource_list;
    switch (attribute) {
      case "corporative_group":
        real_attribute = "corporate_group";
        break;
      case "warehouses":
        real_attribute = "first_warehouse";
        real_list = resource_list.map((resource: any) => {
          resource[real_attribute] =
            resource["warehouses"].length > 0
              ? resource["warehouses"][0]
              : null;
          return resource;
        });
        break;
      case "cyclic_counts":
          real_attribute = "first_ccount";
          real_list = resource_list.map((resource: any) => {
            resource[real_attribute] =
              resource["cyclic_counts"].length > 0
                ? resource["cyclic_counts"][0]
                : null;
            return resource;
          });
          break;
          
      case "warehouse_locations":
        real_attribute = "first_whlocation";
        real_list = resource_list.map((resource: any) => {
          resource[real_attribute] =
            resource["warehouse_locations"].length > 0
              ? resource["warehouse_locations"][0]
              : null;
          return resource;
        });
        break;
      default:
        real_attribute = attribute;
    }

    const sorted_results = real_list.sort(function (res1: any, res2: any) {
      if (
        res2 == null ||
        res1 == null ||
        res2 == undefined ||
        res1 == undefined
      ) {
        return 0;
      }
      if (res1[real_attribute] == null) {
        return 1;
      }
      if (res2[real_attribute] == null) {
        return -1;
      }

      let name1 = res1[real_attribute][sub_attribute].toLowerCase();
      let name2 = res2[real_attribute][sub_attribute].toLowerCase();
      if (name1 < name2) {
        return sort_order == "ASC" ? -1 : 1;
      }
      if (name1 > name2) {
        return sort_order == "ASC" ? 1 : -1;
      }
      return 0;
    });
    return sorted_results;
  } else {
    return resource_list;
  }
};
