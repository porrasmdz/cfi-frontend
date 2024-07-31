import { BooleanField, Datagrid, DateField, List, TextField } from 'react-admin';

export const WHTypeList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <BooleanField source="is_archived" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="deleted_at" />
            <TextField source="name" />
            <TextField source="description" />
        </Datagrid>
    </List>
);