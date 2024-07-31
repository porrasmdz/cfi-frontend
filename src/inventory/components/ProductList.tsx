import { BooleanField, Datagrid, DateField, List, NumberField, ReferenceField, TextField } from 'react-admin';

export const ProductList = () => (
    <List>
        <Datagrid>
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
        </Datagrid>
    </List>
);