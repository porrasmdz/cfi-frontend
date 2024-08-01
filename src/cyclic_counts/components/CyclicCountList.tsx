import {
  Datagrid,
  DateField,
  List,
  SingleFieldList,
  ChipField,
  EditButton,
  TextField,
  ArrayField,
  SimpleList,
  SearchInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/system";
import { DetailedCyclicCount } from "../interfaces/ICyclicCount";

const cyclicFilters = [
  <SearchInput placeholder="Nombre" source="name" alwaysOn />,
  <SelectInput
    label="Estado"
    source="status"
    choices={[
      { id: "Abierto", name: "Abierto" },
      { id: "Cerrado", name: "Cerrado" },
    ]}
  />,
  <SelectInput
    label="Tipo de Conteo"
    source="count_type"
    choices={[
      { id: "Primer Conteo", name: "Primer Conteo" },
      { id: "Segundo Conteo", name: "Segundo Conteo" },
      { id: "Tercer Conteo", name: "Tercer Conteo" },
    ]}
  />,
];

export const CyclicCountList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={cyclicFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: DetailedCyclicCount) => record.name}
          secondaryText={(record: DetailedCyclicCount) =>
            `Fecha Cierre: ${new Date(record.count_date_finish).toDateString()}`
          }
          tertiaryText={(record: DetailedCyclicCount) => record.count_type}
          linkType="show"
        />
      ) : (
        <Datagrid>
          <TextField source="name" />
          <TextField source="status" />
          <TextField source="count_type" />
          <DateField source="count_date_finish" />
          <ArrayField source="warehouses" sortBy="warehouses.name">
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
