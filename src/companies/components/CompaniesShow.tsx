import {
  BooleanField,
  DateField,
  EmailField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  ArrayField,
  Datagrid,
} from "react-admin";

export const CompaniesShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="codename" />
      <TextField source="phone_number" />
      <TextField source="cellphone_number" />
      <EmailField source="email" />
      <TextField source="ruc" />
      <DateField source="foundation_date" />
      <ArrayField source="contacts">
        <Datagrid>
          <DateField source="updated_at" />
          <TextField source="full_name" />
          <TextField source="contact_number" />
          <TextField source="alt_contact_number" />
          <TextField source="employee_charge" />
          <EmailField source="email" />
        </Datagrid>
      </ArrayField>
      <ReferenceField
        source="corporate_group_id"
        reference="corporative_groups"
      />
    </SimpleShowLayout>
  </Show>
);
