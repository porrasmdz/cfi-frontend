import { BooleanField, DateField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const WHLocationTypesShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <BooleanField source="is_archived" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="deleted_at" />
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);