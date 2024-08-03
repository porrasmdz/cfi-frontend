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
import BaseShow from "../../commons/components/BaseShow";
export const WarehouseShow = () => (
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
    </BaseShow>

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
