import { BooleanInput, DateInput, Create, SimpleForm, TextInput } from 'react-admin';

export const ProductCategoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <BooleanInput source="is_archived" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <TextInput source="deleted_at" />
            <TextInput source="name" />
            <TextInput source="short_codename" />
        </SimpleForm>
    </Create>
);