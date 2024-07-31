import { BooleanField, Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

export const WHLocationList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <BooleanField source="is_archived" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="deleted_at" />
            <TextField source="name" />
            <TextField source="description" />
            <ReferenceField source="wh_location_type_id" reference="wh_location_types" />
            <ReferenceField source="parent_id" reference="parents" />
            <ReferenceField source="warehouse_id" reference="warehouses" />
        </Datagrid>
    </List>
);