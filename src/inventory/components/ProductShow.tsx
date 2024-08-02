import {
  DateField,
  Labeled,
  NumberField,
  ReferenceField,
  Show,
  TabbedShowLayout,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import {
  List,
  ListSubheader,
  Divider,
  ListItem,
  ListItemText,
  Stack,
  Box,
} from "@mui/material";
import { styles } from "../../commons/themes";
export const ProductShow = () => (
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
                <TextField source="code" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <TextField source="sku" />
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
                <NumberField source="unit_cost" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <ReferenceField
                  source="measure_unit_id"
                  reference="measure_units"
                />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <ReferenceField source="category_id" reference="product_categories" />
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
      <TabbedShowLayout.Tab label="Veces que se Contó">
        <Stack></Stack>
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="Ubicaciones Registradas">
        <Stack> </Stack>
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
