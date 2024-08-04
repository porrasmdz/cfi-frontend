import { DateField, Labeled, SimpleShowLayout, TextField } from "react-admin";
import {
  List,
  Divider,
  ListItem,
  Stack,
  ListSubheader,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import { styles } from "../themes";

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

export const BaseShow = ({ children }: Props) => {
  return (
    <SimpleShowLayout>
      <List sx={styles.showListSx}>
        <ListSubheader>
          <Typography variant="h6" paddingY={"0.8rem"}>
            Id
          </Typography>
        </ListSubheader>
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
        <ListSubheader>
          <Typography variant="h6" paddingY={"0.8rem"}>
            Datos
          </Typography>
        </ListSubheader>
        <Divider />
        {children}
        <ListSubheader>
          <Typography variant="h6" paddingY={"0.8rem"}>
            Edición
          </Typography>
        </ListSubheader>
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

              <Box sx={{ width: "25%" }} />
              <Box sx={{ width: "25%" }} />
            </Stack>
          </ListItemText>
        </ListItem>
      </List>
    </SimpleShowLayout>
  );
};

export default BaseShow;
