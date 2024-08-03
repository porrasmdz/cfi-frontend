import {
  ArrayField,
  Datagrid,
  DateField,
  Labeled,
  ReferenceField,
  Show,
  TabbedShowLayout,
  TextField,
} from "react-admin";
import {
  Box,
  ListItemText,
  ListItem,
  Stack,
} from "@mui/material";
import { styles } from "../../commons/themes";
import BaseShow from "../../commons/components/BaseShow";

export const CyclicCountShow = () => {
  return (
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
                <TextField source="status" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <TextField source="count_type" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <ReferenceField source="parent_id" reference="parents" />
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
              sx={{ paddingBottom: "0.6rem" }}
            >
              <Labeled sx={{ width: "25%" }}>
                <DateField source="count_date_start" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <DateField source="count_date_finish" />
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
        <TabbedShowLayout.Tab label="Almacenes">
          <ArrayField source="warehouses" label="">
            <Datagrid rowClick={false}>
              <TextField source="name" />
              <TextField source="address" />
              <ReferenceField source="company_id" reference="companies" />
              <ReferenceField
                source="warehouse_type_id"
                reference="warehouse_types"
              />
            </Datagrid>
          </ArrayField>
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab label="Administración">
          <Stack> </Stack>
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};
