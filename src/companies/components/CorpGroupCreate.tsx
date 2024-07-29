import {
  ArrayInput,
  BooleanInput,
  DateInput,
  Edit,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  Create
} from "react-admin";

export const CorpGroupCreate = () => (
  <Create>
    <SimpleForm>
      {/* <BooleanInput source="is_archived" /> */}
      <TextInput source="name" />
      <TextInput source="description" />
      <ArrayInput source="companies">
        <SimpleFormIterator>
          <TextInput source="id" />
          <BooleanInput source="is_archived" />
          <DateInput source="created_at" />
          <DateInput source="updated_at" />
          <TextInput source="deleted_at" />
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
  </Create>
);
