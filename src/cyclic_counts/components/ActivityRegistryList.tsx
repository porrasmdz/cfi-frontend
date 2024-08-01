import {
  SimpleList,
  Datagrid,
  SearchInput,
  SelectInput,
  List,
  ReferenceField,
  TextField,
  EditButton
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/system";
import { DetailedActivityRegistry } from "../interfaces/IActivityRegistry";

const activityFilters = [
  <SearchInput placeholder="Acción" source="detail" alwaysOn />,
 
  <SelectInput
    label="Usuario"
    source="user"
    choices={[
      { id: "bdce6d19-9d3f-48cb-9e5d-9c0700db3b3c", name: "Usuario X" },
    ]}
  />,
];

export const ActivityRegistryList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={activityFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: DetailedActivityRegistry) => record.detail}
          secondaryText={(record: DetailedActivityRegistry) =>
            record.commentary
          }
          tertiaryText={(record: DetailedActivityRegistry) => record.user}
          linkType="show"
        />
      ) : (
        <Datagrid>
          <TextField source="detail" />
          <TextField source="commentary" />
          <TextField source="user" />
          <ReferenceField
            source="count_registry_id"
            reference="count_registries"
          >
            <TextField source="registry_type" />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
