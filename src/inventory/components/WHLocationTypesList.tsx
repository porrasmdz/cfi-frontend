import {
    SearchInput,
    Datagrid,
    SimpleList,
    List,
    EditButton,
    TextField,
  } from "react-admin";
  import { useMediaQuery, Theme } from "@mui/system";
import { ReadWHLocationType } from "../interfaces/IWHLocationType";
  
  const whLocationTypeFilters = [
    <SearchInput placeholder="Nombre" source="name" alwaysOn />,
  ];
  export const WHLocationTypesList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
      <List filters={whLocationTypeFilters}>
        {isSmall ? (
          <SimpleList
            primaryText={(record: ReadWHLocationType) => record.name}
            linkType="show"
          />
        ) : (
        <Datagrid>
            <TextField source="name" />
            <EditButton />
        </Datagrid>)}
    </List>)
  };