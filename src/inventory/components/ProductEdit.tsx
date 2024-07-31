import { BooleanInput, DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <BooleanInput source="is_archived" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <TextInput source="deleted_at" />
            <TextInput source="name" />
            <TextInput source="code" />
            <TextInput source="sku" />
            <NumberInput source="unit_cost" />
            <ReferenceInput source="measure_unit_id" reference="measure_units" />
            <ReferenceInput source="category_id" reference="categories" />
        </SimpleForm>
    </Edit>
);