import { BooleanField, DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const ProductShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <BooleanField source="is_archived" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="deleted_at" />
            <TextField source="name" />
            <TextField source="code" />
            <TextField source="sku" />
            <NumberField source="unit_cost" />
            <ReferenceField source="measure_unit_id" reference="measure_units" />
            <ReferenceField source="category_id" reference="categories" />
        </SimpleShowLayout>
    </Show>
);