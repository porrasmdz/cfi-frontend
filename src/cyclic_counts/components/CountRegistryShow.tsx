import { BooleanField, DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const CountRegistryShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <BooleanField source="is_archived" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="deleted_at" />
            <TextField source="registry_type" />
            <NumberField source="registry_units" />
            <NumberField source="registry_cost" />
            <DateField source="difference_units" />
            <DateField source="difference_cost" />
            <ReferenceField source="product_id" reference="products" />
            <ReferenceField source="cyclic_count_id" reference="cyclic_counts" />
        </SimpleShowLayout>
    </Show>
);