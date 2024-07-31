import { BooleanInput, DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const MeasureUnitEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <BooleanInput source="is_archived" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <TextInput source="deleted_at" />
            <TextInput source="name" />
            <TextInput source="conversion_formula" />
            <ReferenceInput source="parent_id" reference="parents" />
        </SimpleForm>
    </Edit>
);