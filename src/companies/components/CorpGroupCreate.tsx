import {
  SimpleForm,
  TextInput,
  Create,
  required
} from "react-admin";

export const CorpGroupCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} />
      <TextInput source="description"  multiline/>
    </SimpleForm>
  </Create>
);
