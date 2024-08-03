import { Children } from "react";
import { DateField, Labeled, SimpleForm, SimpleShowLayout, TextField } from "react-admin";
import {
  List,
  Divider,
  ListItem,
  Stack,
  ListSubheader,
  ListItemText,
  Box
} from "@mui/material";
import { styles } from "../themes";

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export const BaseEdit = ({ children }: Props) => {
  return (
    <SimpleForm>
      <List sx={styles.showListSx}>
        <ListSubheader>Datos</ListSubheader>
        <Divider />
        {children}
        
      </List>
    </SimpleForm>
  );
};

export default BaseEdit;
