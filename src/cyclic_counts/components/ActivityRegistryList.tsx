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
  <SearchInput placeholder="Modelo" source="model" alwaysOn />,
 
  
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
          <TextField source="model" />
          <TextField source="action" />
          <TextField source="user.email" />
          
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
