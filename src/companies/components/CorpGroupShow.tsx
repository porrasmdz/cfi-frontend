import {
    ArrayField,
  BooleanField,
  Datagrid,
  DateField,
  EmailField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const CorpGroupShow = () => (
  <Show>
    <SimpleShowLayout>
      <DateField source="updated_at" />
      <TextField source="name" />
      <TextField source="description" />
      <ArrayField source="companies">
        <Datagrid>
          <TextField source="name" />
          <TextField source="codename" />
          <TextField source="phone_number" />
          <TextField source="cellphone_number" />
          <EmailField source="email" />
          <TextField source="ruc" />
          <DateField source="foundation_date" />
          <DateField source="updated_at" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
