//@ts-nocheck
import {
  SimpleForm,
} from "react-admin";
import {
  List,
  Divider,
  ListSubheader,
  Typography
} from "@mui/material";
import { styles } from "../themes";

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export const BaseEdit = ({ children }: Props) => {
  
  return (
    <SimpleForm>
      <List sx={styles.showListSx}>
        <ListSubheader>
          <Typography variant="h6" paddingY={"0.8rem"}>
          Datos
          </Typography>
          
          </ListSubheader>
        <Divider />
        {children}
      </List>
    </SimpleForm>
  );
};

export default BaseEdit;
