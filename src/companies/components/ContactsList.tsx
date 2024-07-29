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
} from "react-admin";
const contactFilters = [
  <TextInput source="full_name" label="Search" alwaysOn />,
  <ReferenceInput source="company_id" label="Compañía" reference="companies" />,
];

export const ContactsList = () => (
  <List filters={contactFilters}>
    <Datagrid>
      <TextField source="full_name" />
      <TextField source="contact_number" />
      <TextField source="alt_contact_number" />
      <TextField source="employee_charge" />
      <EmailField source="email" />
      <ReferenceField source="company_id" reference="companies" />
      <DateField source="updated_at" />
    </Datagrid>
  </List>
);
