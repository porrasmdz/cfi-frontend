import {
  ReferenceInput,
  SearchInput,
  Datagrid,
  SimpleList,
  List,
  ReferenceField,
  EditButton,
  TextField,
} from "react-admin";
import { DetailedWHLocation } from "../interfaces/IWHLocation";
import { useMediaQuery, Theme } from "@mui/system";

const whLocationFilters = [
  <SearchInput placeholder="Nombre" source="name" alwaysOn />,
  <ReferenceInput
    label="Tipo de Ubicación"
    source="wh_location_type_id"
    reference="whlocation_types"
  />, 
  <ReferenceInput
  label="Ubicación Padre"
  source="parent_id"
  reference="whlocations"
/>,
];
export const WHLocationList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <List filters={whLocationFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: DetailedWHLocation) => record.name}
          secondaryText={(record: DetailedWHLocation) => record.warehouse.name}
          tertiaryText={(record: DetailedWHLocation) => record.wh_location_type?.name ?? "Sin Tipo"}
          linkType="show"
        />
      ) : (
        <Datagrid>
          <TextField source="name" />
          <TextField source="description" />
          <ReferenceField
            source="wh_location_type_id"
            reference="whlocation_types"
          />
          <ReferenceField source="parent_id" reference="whlocations" />
          <ReferenceField source="warehouse_id" reference="warehouses" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
