import {
  Labeled,
  NumberField,
  ReferenceField,
  Show,
  List,
  TabbedShowLayout,
  TextField,
  ReferenceManyField,
  Datagrid,
  NumberInput,
  useRecordContext,
  ReferenceOneField,
} from "react-admin";
import {
  ListItem,
  ListItemText,
  Stack,
  ListSubheader,
  Typography,
  Divider,
} from "@mui/material";
import { styles } from "../../commons/themes";
import BaseShow from "../../commons/components/BaseShow";
export const ProductShow = () => {
  const record = useRecordContext();
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
        <TabbedShowLayout.Tab label="Registros de Conteo">
          <ListSubheader>
            <Typography variant="h6" paddingY={"0.8rem"}>
              Unidades en Sistema:{" "}
              <ReferenceOneField
                link={false}
                filter={{ registry_type: "system" }}
                reference="count_registries"
                target="product_id"
              >
                <TextField
                  sx={{ fontSize: "1.2rem" }}
                  source="registry_units"
                />
              </ReferenceOneField>
            </Typography>
          </ListSubheader>

          <ReferenceManyField reference="count_registries" target="product_id">
            <Datagrid rowClick={false}>
              <TextField source="registry_type" />
              <TextField source="registry_units" />
              <ReferenceField
                source="cyclic_count_id"
                reference="cyclic_counts"
              />
            </Datagrid>
          </ReferenceManyField>
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab label="Ubicaciones Registradas">
          <Stack> </Stack>
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};
