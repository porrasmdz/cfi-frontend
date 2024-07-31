import { BooleanField, Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

export const WarehouseList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
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
            <ReferenceField source="warehouse_type_id" reference="warehouse_types" />
        </Datagrid>
    </List>
);