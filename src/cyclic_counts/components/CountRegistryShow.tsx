import {
  DateField,
  Labeled,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import {
  Divider,
  Box,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";
import BaseShow from "../../commons/components/BaseShow";
import { styles } from "../../commons/themes";

export const CountRegistryShow = () => (
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
              <TextField source="registry_type" />
            </Labeled>
            <Labeled sx={{ width: "25%" }}>
              <ReferenceField source="product_id" reference="products" />
            </Labeled>
            <Labeled sx={{ width: "25%" }}>
              <ReferenceField
                source="cyclic_count_id"
                reference="cyclic_counts"
              />
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
              <NumberField source="registry_units" />
            </Labeled>
            <Labeled sx={{ width: "25%" }}>
              <NumberField source="registry_cost" />
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
              <DateField source="difference_units" />
            </Labeled>
            <Labeled sx={{ width: "25%" }}>
              <DateField source="difference_cost" />
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
