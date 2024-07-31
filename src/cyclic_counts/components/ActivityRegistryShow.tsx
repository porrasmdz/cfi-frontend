import { BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const ActivityRegistryShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <BooleanField source="is_archived" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="deleted_at" />
            <TextField source="detail" />
            <TextField source="commentary" />
            <TextField source="user" />
            <ReferenceField source="count_registry_id" reference="count_registries" />
        </SimpleShowLayout>
    </Show>
);