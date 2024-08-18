import {
  EditButton,
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  SearchInput,
  ReferenceInput,
  TextField,
  SimpleList,
  ReferenceArrayField,
  ArrayField,
  ChipField,
  SingleFieldList,
} from "react-admin";

import { useMediaQuery, Theme } from "@mui/system";
import { DetailedProduct, ReadProduct } from "../interfaces/IProduct";

const productFilters = [
  <SearchInput placeholder="Nombre de Producto" source="name" alwaysOn />,
  <ReferenceInput
    label="Categoría"
    source="category_id"
    reference="product_categories"
  />,
];
export const ProductList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={productFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: DetailedProduct) => record.name}
          secondaryText={(record: DetailedProduct) => record.unit_cost}
          tertiaryText={(record: DetailedProduct) => record.category.name}
          linkType="show"
        />
      ) : (
        <Datagrid>
          <TextField source="name" />
          <TextField source="code" />
          <NumberField source="unit_cost" />
          <ReferenceField source="measure_unit_id" reference="measure_units" />
          <ReferenceField source="category_id" reference="product_categories" />
          <ArrayField source="cyclic_counts" sortBy="cyclic_counts.name">
            <SingleFieldList linkType={false}>
              <ChipField source="name" />
            </SingleFieldList>
          </ArrayField>
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
