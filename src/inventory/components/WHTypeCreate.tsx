import { ArrayInput, BooleanInput, DateInput, Create, ReferenceInput, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';

export const WHTypeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <BooleanInput source="is_archived" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <TextInput source="deleted_at" />
            <TextInput source="name" />
            <ArrayInput source="warehouses"><SimpleFormIterator><TextInput source="id" />
<BooleanInput source="is_archived" />
<DateInput source="created_at" />
<DateInput source="updated_at" />
<TextInput source="deleted_at" />
<TextInput source="name" />
<TextInput source="country" />
<TextInput source="state" />
<TextInput source="city" />
<TextInput source="address" />
<ReferenceInput source="company_id" reference="companies" />
<ReferenceInput source="warehouse_type_id" reference="warehouse_types" /></SimpleFormIterator></ArrayInput>
            <TextInput source="description" />
        </SimpleForm>
    </Create>
);