import { ArrayInput, BooleanInput, DateInput, Edit, ReferenceInput, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';

export const WarehouseEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
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
            <ReferenceInput source="warehouse_type_id" reference="warehouse_types" />
            <ArrayInput source="wh_locations"><SimpleFormIterator><TextInput source="id" />
<BooleanInput source="is_archived" />
<DateInput source="created_at" />
<DateInput source="updated_at" />
<TextInput source="deleted_at" />
<TextInput source="name" />
<TextInput source="description" /></SimpleFormIterator></ArrayInput>
        </SimpleForm>
    </Edit>
);