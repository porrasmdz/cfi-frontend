import { SimpleList, Datagrid,SearchInput, List, TextField, EditButton } from "react-admin";

import { useMediaQuery, Theme } from "@mui/system";
import { DetailedWarehouseType } from "../interfaces/IWarehouseType";
const whTypeFilters = [
    <SearchInput placeholder="Nombre" source="name" alwaysOn />,
    
  ];
export const WHTypeList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={whTypeFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: DetailedWarehouseType) => record.name}
          secondaryText={(record: DetailedWarehouseType) => record.description}
          linkType="show"
        />
      ) : (
        <Datagrid>
          <TextField source="name" />
          <TextField source="description" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
