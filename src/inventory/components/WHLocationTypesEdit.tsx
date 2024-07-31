import { BooleanInput, DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const WHLocationTypesEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <BooleanInput source="is_archived" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <TextInput source="deleted_at" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);