import {
  DateField,
  Labeled,
  TabbedShowLayout,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import {
  List,
  ListSubheader,
  Stack,
  Divider,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { styles } from "../../commons/themes";
export const MeasureUnitShow = () => (
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
                <TextField source="conversion_formula"/>
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
              sx={{ paddingY: "0.6rem" }}
            >
            <Labeled sx={{ width: "25%" }}>
                <ReferenceField source="parent_id" reference="measure_units" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
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
      <TabbedShowLayout.Tab label="U. de Medida Relacionadas">
        <Stack></Stack>
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="Bodegas que lo Usan">
        <Stack> </Stack>
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
