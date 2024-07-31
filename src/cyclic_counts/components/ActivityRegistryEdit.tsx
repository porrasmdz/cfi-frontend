import { BooleanInput, DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const ActivityRegistryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <BooleanInput source="is_archived" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
            <TextInput source="deleted_at" />
            <TextInput source="detail" />
            <TextInput source="commentary" />
            <TextInput source="user" />
            <ReferenceInput source="count_registry_id" reference="count_registries" />
        </SimpleForm>
    </Edit>
);