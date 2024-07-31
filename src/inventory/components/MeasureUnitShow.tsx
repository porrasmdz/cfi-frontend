import { BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const MeasureUnitShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <BooleanField source="is_archived" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="deleted_at" />
            <TextField source="name" />
            <TextField source="conversion_formula" />
            <ReferenceField source="parent_id" reference="parents" />
        </SimpleShowLayout>
    </Show>
);