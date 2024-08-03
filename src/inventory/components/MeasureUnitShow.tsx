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
import BaseShow from "../../commons/components/BaseShow";
import { styles } from "../../commons/themes";

export const MeasureUnitShow = () => (
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
              <TextField source="conversion_formula" />
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
    </BaseShow>
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
