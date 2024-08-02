import {
  EditButton,
  SearchInput,
  ReferenceInput,
  Datagrid,
  SimpleList,
  List,
  TextField,
  ReferenceField,
} from "react-admin";
import { DetailedProductCategory } from "../interfaces/IProductCategory";
import { useMediaQuery, Theme } from "@mui/system";

const categoryFilters = [
  <SearchInput placeholder="Categoría" source="name" alwaysOn />,
  <ReferenceInput
    label="Categoría Padre"
    source="parent_id"
    reference="product_categories"
  />,
];
export const ProductCategoryList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={categoryFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: DetailedProductCategory) => record.name}
          secondaryText={(record: DetailedProductCategory) =>
            `Padre: ${record?.parent_category?.name ?? "N/A"}`
          }
          tertiaryText={(record: DetailedProductCategory) =>
            record.short_codename
          }
          linkType="show"
        />
      ) : (
        <Datagrid>
          <TextField source="name" />
          <TextField source="short_codename" />
          <ReferenceField source="parent_id" reference="product_categories" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
