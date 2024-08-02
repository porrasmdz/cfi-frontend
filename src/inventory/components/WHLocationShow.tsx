import {
  DateField,
  Labeled,
  TabbedShowLayout,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { styles } from "../../commons/themes";
import {
  List,
  Box,
  ListSubheader,
  Divider,
  ListItemText,
  ListItem,
  Stack,
} from "@mui/material";
export const WHLocationShow = () => (
  <Show>
    <SimpleShowLayout>
      <List sx={{ width: "100%" }}>
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
        <ListItem>
          <ListItemText sx={{ paddingY: "0.6rem" }}>
            <Stack
              direction={"row"}
              justifyContent={styles.stackDefaults.justifyContent}
              spacing={styles.stackDefaults.spacing}
            >
              <Labeled sx={{ width: "25%" }}>
                <ReferenceField
                  source="wh_location_type_id"
                  reference="wh_location_types"
                />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <TextField source="name" />
              </Labeled>

              <Labeled sx={{ width: "50%" }}>
                <TextField source="description" />
              </Labeled>
            </Stack>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText sx={{ paddingY: "0.6rem" }}>
            <Stack
              direction={"row"}
              justifyContent={styles.stackDefaults.justifyContent}
              spacing={styles.stackDefaults.spacing}
            >
              <Labeled sx={{ width: "25%" }}>
                <ReferenceField source="warehouse_id" reference="warehouses" />
              </Labeled>

              <Labeled sx={{ width: "25%" }}>
                <ReferenceField source="parent_id" reference="parents" />
              </Labeled>
              <Labeled sx={{ width: "50%" }}>
                <Box></Box>
              </Labeled>
            </Stack>
          </ListItemText>
        </ListItem>

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

              <Labeled sx={{ width: "25%" }}>
                <Box />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <Box />
              </Labeled>
            </Stack>
          </ListItemText>
        </ListItem>
      </List>
    </SimpleShowLayout>
    
    <TabbedShowLayout>
      <TabbedShowLayout.Tab label="Sub-Clasificaciones">
        <Stack> </Stack>
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="Productos (Directos)">
        <Stack></Stack>
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
