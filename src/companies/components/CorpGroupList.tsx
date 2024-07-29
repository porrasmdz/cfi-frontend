import {
  BooleanField,
  Datagrid,
  DateField,
  EmailField,
  List,
  TextField,
  SimpleList,
  EditButton,
  ReferenceInput,
  TextInput,
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/system";
const groupFilters = [<TextInput source="name" label="Search" alwaysOn />];

export const CorpGroupList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={groupFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.description}
        />
      ) : (
        <Datagrid>
          <TextField source="name" />
          <TextField source="description" />
          <DateField source="updated_at" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
