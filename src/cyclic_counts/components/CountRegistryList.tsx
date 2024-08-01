import {
  Datagrid,
  List,
  NumberField,
  TextField,
  SelectInput,
  NumberInput,
  SimpleList,
  EditButton
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/system";
import { DetailedCountRegistry } from "../interfaces/ICountRegistry";

const countRegistryFilters = [
  <SelectInput
    label="Tipo de Registro"
    source="registry_type"
    choices={[
      { id: "system", name: "Sistema" },
      { id: "physical", name: "Físico" },
      { id: "consolidated", name: "Consolidado" },
    ]}
  />,
  <NumberInput source="difference_units" />,

  <NumberInput source="registry_units" />,
];
export const CountRegistryList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={countRegistryFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: DetailedCountRegistry) => record.registry_type}
          secondaryText={(record: DetailedCountRegistry) =>
            record.registry_units
          }
          tertiaryText={(record: DetailedCountRegistry) =>
            record.difference_units
          }
          linkType="show"
        />
      ) : (
        <Datagrid>
          <TextField source="registry_type" />
          <NumberField source="registry_units" />
          <NumberField source="registry_cost" />
          <NumberField source="difference_units" />
          <NumberField source="difference_cost" />
          <EditButton/>
        </Datagrid>
      )}
    </List>
  );
};
