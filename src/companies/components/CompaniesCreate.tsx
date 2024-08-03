import {
  required,
  Create,
  DateInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const CompaniesCreate = () => (
  <Create sx={{
    maxWidth: "500px",
    justifySelf: 'center',
    alignSelf: 'center'
  }}>
    <SimpleForm width={"450px"}>
      <TextInput source="name" validate={required()}/>
      <TextInput source="codename" />
      <TextInput source="phone_number" />
      <TextInput source="cellphone_number" />
      <TextInput source="email" />
      <TextInput source="ruc" />
      <DateInput source="foundation_date" />
  
      <ReferenceInput
        source="corporate_group_id"
        reference="corporative_groups"
      />
    </SimpleForm>
  </Create>
);
