import { BooleanField, DateField, EmailField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const ContactsShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="full_name" />
            <TextField source="contact_number" />
            <TextField source="alt_contact_number" />
            <TextField source="employee_charge" />
            <EmailField source="email" />
            <ReferenceField source="company_id" reference="companies" />
            <DateField source="updated_at" />

        </SimpleShowLayout>
    </Show>
);