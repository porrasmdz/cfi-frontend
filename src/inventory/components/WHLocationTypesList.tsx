import { BooleanField, Datagrid, DateField, List, TextField } from 'react-admin';

export const WHLocationTypesList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <BooleanField source="is_archived" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="deleted_at" />
            <TextField source="name" />
        </Datagrid>
    </List>
);