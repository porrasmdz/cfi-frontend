import {
  ArrayInput,
  BooleanInput,
  DateInput,
  Edit,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

export const CorpGroupEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <ArrayInput source="companies">
        <SimpleFormIterator>
          <DateInput source="updated_at" />
          <TextInput source="name" />
          <TextInput source="codename" />
          <TextInput source="phone_number" />
          <TextInput source="cellphone_number" />
          <TextInput source="email" />
          <TextInput source="ruc" />
          <DateInput source="foundation_date" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
