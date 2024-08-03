import { Children } from "react";
import { DateField, Labeled, SimpleShowLayout, TextField } from "react-admin";
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

export const BaseShow = ({ children }: Props) => {
  return (
    <SimpleShowLayout>
      <List sx={styles.showListSx}>
        <ListSubheader>Id</ListSubheader>
        <Divider />
        <ListItem>
          <ListItemText>
            <Stack
              direction={"row"}
              justifyContent={styles.stackDefaults.justifyContent}
              spacing={styles.stackDefaults.spacing}
              sx={styles.stackDefaults.sx}
            >
              <TextField source="id" />
            </Stack>
          </ListItemText>
        </ListItem>
        <ListSubheader>Datos</ListSubheader>
        <Divider />
        {children}
        <ListSubheader>Edición</ListSubheader>
        <Divider />
        <ListItem>
          <ListItemText>
            <Stack
              direction={"row"}
              justifyContent={styles.stackDefaults.justifyContent}
              spacing={styles.stackDefaults.spacing}
              sx={styles.stackDefaults.sx}
            >
              <Labeled sx={{ width: "25%" }}>
                <DateField source="updated_at" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <DateField source="created_at" />
              </Labeled>

              <Box sx={{ width: "25%" }}/>
              <Box sx={{ width: "25%" }}/>
            </Stack>
          </ListItemText>
        </ListItem>
      </List>
    </SimpleShowLayout>
  );
};

export default BaseShow;
