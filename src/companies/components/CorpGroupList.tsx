import { BooleanField, Datagrid, DateField, EmailField, List, TextField, SimpleList } from 'react-admin';
import { useMediaQuery, Theme } from "@mui/system";

export const CorpGroupList = () => {
    const isSmall = useMediaQuery<Theme>((theme)=> theme.breakpoints.down("sm"))

    return (
    <List>
        {
        isSmall ? (
            <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.description}
                />
        ) : (<Datagrid>
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="updated_at" />
            
        </Datagrid>)
        }
        
    </List>);
};