import {
  ArrayInput,
  BooleanInput,
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

export const CompaniesEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="codename" />
      <TextInput source="phone_number" />
      <TextInput source="cellphone_number" />
      <TextInput source="email" />
      <TextInput source="ruc" />
      <DateInput source="foundation_date" />
      <ArrayInput source="contacts">
        <SimpleFormIterator>
          <TextInput source="full_name" />
          <TextInput source="contact_number" />
          <TextInput source="alt_contact_number" />
          <TextInput source="employee_charge" />
          <TextInput source="email" />
        </SimpleFormIterator>
      </ArrayInput>
      <ReferenceInput
        source="corporate_group_id"
        reference="corporative_groups"
      />
    </SimpleForm>
  </Edit>
);
