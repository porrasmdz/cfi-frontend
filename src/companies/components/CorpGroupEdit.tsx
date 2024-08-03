import {
  Edit,
  SimpleForm,
  TextInput,
  required
} from "react-admin";

export const CorpGroupEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" validate={[required()]}/>
      <TextInput source="description" multiline/>
      {/* <ArrayInput source="companies">
        <SimpleFormIterator>
          <TextInput source="name" />
          <TextInput source="codename" />
          <TextInput source="phone_number" />
          <TextInput source="cellphone_number" />
          <TextInput source="email" />
          <TextInput source="ruc" />
          <DateInput source="foundation_date" />
        </SimpleFormIterator>
      </ArrayInput> */}
    </SimpleForm>
  </Edit>
);
