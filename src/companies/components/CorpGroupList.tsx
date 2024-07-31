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
import { ReadCorporateGroup } from "../interfaces/ICorporativeGroup";

import { useMediaQuery, Theme } from "@mui/system";

const groupFilters = [<TextInput source="name" label="Search" alwaysOn />];

export const CorpGroupList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={groupFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: ReadCorporateGroup) => record.name}
          secondaryText={(record: ReadCorporateGroup) => record?.description}
        />
      ) : (
        <Datagrid>
          <TextField source="name" />
          <TextField source="description" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
