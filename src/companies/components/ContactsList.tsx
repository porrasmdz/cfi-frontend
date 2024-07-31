import {
  BooleanField,
  Datagrid,
  DateField,
  EmailField,
  List,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  EditButton,
  SimpleList,
} from "react-admin";
import { ReadContact } from "../interfaces/IContact";

const contactFilters = [
  <TextInput source="full_name" label="Search" alwaysOn />,
  <ReferenceInput source="company_id" label="Compañía" reference="companies" />,
];

import { useMediaQuery, Theme } from "@mui/system";
export const ContactsList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={contactFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: ReadContact) => record.full_name}
          secondaryText={(record: ReadContact) => record.contact_number}
        />
      ) : (
        <Datagrid>
          <TextField source="full_name" />
          <TextField source="contact_number" />
          <TextField source="alt_contact_number" />
          <TextField source="employee_charge" />
          <EmailField source="email" />
          
          
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
