import { ArrayField, BooleanField, Datagrid, DateField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const CyclicCountShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <BooleanField source="is_archived" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="deleted_at" />
            <TextField source="name" />
            <TextField source="status" />
            <TextField source="count_type" />
            <DateField source="count_date_start" />
            <DateField source="count_date_finish" />
            <ArrayField source="warehouses"><Datagrid><TextField source="id" />
<BooleanField source="is_archived" />
<DateField source="created_at" />
<DateField source="updated_at" />
<TextField source="deleted_at" />
<TextField source="name" />
<TextField source="country" />
<TextField source="state" />
<TextField source="city" />
<TextField source="address" />
<ReferenceField source="company_id" reference="companies" />
<ReferenceField source="warehouse_type_id" reference="warehouse_types" /></Datagrid></ArrayField>
            <ReferenceField source="parent_id" reference="parents" />
        </SimpleShowLayout>
    </Show>
);