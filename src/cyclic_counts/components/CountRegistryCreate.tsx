import { BooleanInput, DateInput, Create, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const CountRegistryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <BooleanInput source="is_archived" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <TextInput source="deleted_at" />
            <TextInput source="registry_type" />
            <NumberInput source="registry_units" />
            <NumberInput source="registry_cost" />
            <DateInput source="difference_units" />
            <DateInput source="difference_cost" />
            <ReferenceInput source="product_id" reference="products" />
            <ReferenceInput source="cyclic_count_id" reference="cyclic_counts" />
        </SimpleForm>
    </Create>
);