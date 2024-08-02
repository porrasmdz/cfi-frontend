import {
  DateField,
  Labeled,
  Show,
  ReferenceField,
  SimpleShowLayout,
  TabbedShowLayout,
  TextField,
} from "react-admin";
import {
  List,
  ListItem,
  ListSubheader,
  Divider,
  ListItemText,
  Stack,
  Box,
} from "@mui/material";
import { styles } from "../../commons/themes";
export const ProductCategoryShow = () => (
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
                <TextField source="name" />
              </Labeled>

              <Labeled sx={{ width: "25%" }}>
                <TextField source="short_codename" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <ReferenceField
                  source="parent_id"
                  reference="product_categories"
                />
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
      <TabbedShowLayout.Tab label="Categorías Hijas">
        <Stack></Stack>
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="Productos (Directos)">
        <Stack></Stack>
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
