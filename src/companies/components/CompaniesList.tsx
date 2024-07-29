import { BooleanField, Datagrid, DateField, EmailField, List, TextField, SimpleList, ReferenceField } from 'react-admin';
import { useMediaQuery, Theme } from "@mui/system";

export const CompaniesList = () => {
    const isSmall = useMediaQuery<Theme>((theme)=> theme.breakpoints.down("sm"))

    return (
    <List>
        {
        isSmall ? (
            <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.codename}
                    tertiaryText={(record) => record.email}
                />
        ) : (<Datagrid>
            <TextField source="name" />
            <TextField source="codename" />
            <EmailField source="email" sx={{textDecoration: "none"}} />
            <TextField source="ruc" />

            <ReferenceField source="corporate_group.id" reference="corporative_groups" />
            <DateField source="updated_at" />
        </Datagrid>)
        }
        
    </List>);
};