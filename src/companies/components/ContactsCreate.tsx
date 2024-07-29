import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const ContactsCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="full_name" />
            <TextInput source="contact_number" />
            <TextInput source="alt_contact_number" />
            <TextInput source="employee_charge" />
            <TextInput source="email" />
            <ReferenceInput source="company_id" reference="companies" />
        </SimpleForm>
    </Create>
);