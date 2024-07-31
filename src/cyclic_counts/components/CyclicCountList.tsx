import { BooleanField, Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

export const CyclicCountList = () => (
    <List>
        <Datagrid>
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
            <TextField source="warehouses" />
            <ReferenceField source="parent_id" reference="parents" />
        </Datagrid>
    </List>
);