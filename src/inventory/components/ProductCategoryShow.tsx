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
import BaseShow from "../../commons/components/BaseShow";
import { styles } from "../../commons/themes";
export const ProductCategoryShow = () => (
  <Show>
    <BaseShow>
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
    </BaseShow>

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
