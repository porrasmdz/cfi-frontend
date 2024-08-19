import {
  BooleanField,
  DateField,
  Labeled,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { styles } from "../../commons/themes";
import {
  List,
  ListSubheader,
  Divider,
  ListItem,
  ListItemText,
  Stack,
  Box,
} from "@mui/material";
import BaseShow from "../../commons/components/BaseShow";
export const ActivityRegistryShow = () => (
  <Show>
    <BaseShow>
      <ListItem>
        <ListItemText sx={{ paddingTop: "0.6rem" }}>
          <Stack
            direction={"row"}
            justifyContent={styles.stackDefaults.justifyContent}
            spacing={styles.stackDefaults.spacing}
          >
            <Labeled sx={{ width: "25%" }}>
              <TextField source="model" />
            </Labeled>
            <Labeled sx={{ width: "25%" }}>
              <TextField source="action" />
            </Labeled>
            <Labeled sx={{ width: "25%" }}>
              <TextField source="user.email" />
            </Labeled>

            <Labeled sx={{ width: "25%" }}>
              <Box />
            </Labeled>
          </Stack>
        </ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText>
          <Stack
            direction={"row"}
            justifyContent={styles.stackDefaults.justifyContent}
            spacing={styles.stackDefaults.spacing}
            sx={{ paddingBottom: "0.6rem" }}
          >
            <Labeled sx={{ width: "50%" }}>
              <Box />
            </Labeled>
            <Labeled sx={{ width: "25%" }}>
              <Box />
            </Labeled>
            <Labeled sx={{ width: "25%" }}>
              <Box />
            </Labeled>
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseShow>
  </Show>
);
