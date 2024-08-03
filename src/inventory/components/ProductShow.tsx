import {
  Labeled,
  NumberField,
  ReferenceField,
  Show,
  TabbedShowLayout,
  TextField,
} from "react-admin";
import {
  ListItem,
  ListItemText,
  Stack
} from "@mui/material";
import { styles } from "../../commons/themes";
import BaseShow from "../../commons/components/BaseShow";
export const ProductShow = () => (
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
              <ReferenceField
                source="category_id"
                reference="product_categories"
              />
            </Labeled>
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseShow>

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
