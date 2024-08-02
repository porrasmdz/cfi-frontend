import {
  BooleanField,
  DateField,
  Labeled,
  TabbedShowLayout,
  NumberField,
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
export const WarehouseShow = () => (
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
          <ListItemText sx={{ paddingTop: "0.6rem" }}>
            <Stack
              direction={"row"}
              justifyContent={styles.stackDefaults.justifyContent}
              spacing={styles.stackDefaults.spacing}
            >
              <Labeled sx={{ width: "25%" }}>
                <TextField source="name" />
              </Labeled>

              <Labeled sx={{ width: "25%" }}>
                <TextField source="country" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <TextField source="state" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <TextField source="city" />
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
              sx={{ paddingY: "0.6rem" }}
            >
              <Labeled sx={{ width: "25%" }}>
                <NumberField source="address" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <ReferenceField source="company_id" reference="companies" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <ReferenceField
                  source="warehouse_type_id"
                  reference="warehouse_types"
                />
              </Labeled>

              <Labeled sx={{ width: "25%" }}>
                <Box />
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
      <TabbedShowLayout.Tab label="Conteos Realizados">
        <Stack> </Stack>
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="Todos los Productos">
        <Stack></Stack>
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="Productos de Otras Bodegas">
        <Stack></Stack>
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
