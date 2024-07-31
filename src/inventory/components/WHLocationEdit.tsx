import { BooleanInput, DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const WHLocationEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <BooleanInput source="is_archived" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <TextInput source="deleted_at" />
            <TextInput source="name" />
            <TextInput source="description" />
            <ReferenceInput source="wh_location_type_id" reference="wh_location_types" />
            <ReferenceInput source="parent_id" reference="parents" />
            <ReferenceInput source="warehouse_id" reference="warehouses" />
        </SimpleForm>
    </Edit>
);