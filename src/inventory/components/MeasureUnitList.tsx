import { BooleanField, Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

export const MeasureUnitList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <BooleanField source="is_archived" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="deleted_at" />
            <TextField source="name" />
            <TextField source="conversion_formula" />
            <ReferenceField source="parent_id" reference="parents" />
        </Datagrid>
    </List>
);