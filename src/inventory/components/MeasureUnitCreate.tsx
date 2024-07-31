import { BooleanInput, DateInput, Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const MeasureUnitCreate = () => (
    <Create>
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
    </Create>
);