import {
  SearchInput,
  ReferenceInput,
  SimpleList,
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  TextField,
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/system";
import { DetailedWarehouse } from "../interfaces/IWarehouse";

const warehouseFilters = [
  <SearchInput placeholder="Nombre" source="name" alwaysOn />,
  <ReferenceInput
    label="Tipo de Bodega"
    source="warehouse_type_id"
    reference="warehouse_types"
  />,
  <ReferenceInput
    label="Compañía"
    source="company_id"
    reference="companies"
  />,
];
export const WarehouseList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={warehouseFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: DetailedWarehouse) => record.name}
          secondaryText={(record: DetailedWarehouse) =>
            record.warehouse_type?.name ?? "Sin Tipo"
          }
          
          linkType="show"
        />
      ) : (
        <Datagrid>
          <TextField source="name" />
          <ReferenceField
            source="warehouse_type_id"
            reference="warehouse_types"
          />
          <ReferenceField source="company_id" reference="companies" />
          <TextField source="city" />
          <TextField source="address" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
