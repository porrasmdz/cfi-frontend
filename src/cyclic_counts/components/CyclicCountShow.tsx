import {
  ArrayField,
  DateField,
  Labeled,
  ReferenceField,
  Show,
  SingleFieldList,
  EditButton,
  TopToolbar,
  ChipField,
  TabbedShowLayout,
  TextField,
  ReferenceManyField,

} from "react-admin";
import {
  Box,
  ListItemText,
  ListItem,
  Stack,
  Button,
} from "@mui/material";
import { styles } from "../../commons/themes";
import BaseShow from "../../commons/components/BaseShow";
import { NestedProductList } from "./NestedProductList";
export const CyclicCountShow = () => {
  return (
    <Show actions={<CyclicCountActions />}>
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
                <ArrayField source="warehouses">
                  <SingleFieldList linkType={false}>
                    <ChipField source="name" />
                  </SingleFieldList>
                </ArrayField>
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <Box />
              </Labeled>
            </Stack>
          </ListItemText>
        </ListItem>
      </BaseShow>
      {/* <AggregationTable /> */}
      <TabbedShowLayout>
        <TabbedShowLayout.Tab label="Productos">
          <ReferenceManyField
            reference="products"
            target="cyclic_counts.id"
            label=""
          >
            <NestedProductList />
          </ReferenceManyField>
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab label="Administración">
          <Stack
            direction={"row"}
            justifyContent={styles.stackDefaults.justifyContent}
            spacing={styles.stackDefaults.spacing}
          >
            <Labeled sx={{ width: "25%" }}>
              <ReferenceField
                label="Conteo Previo"
                source="parent_id"
                reference="cyclic_counts"
                emptyText="N/A"
              />
            </Labeled>

            <EditButton sx={{ width: "25%" }} label="Editar Conteo" />
            <Box width={"25%"}></Box>
            <Box width={"25%"}></Box>
          </Stack>
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};

const CyclicCountActions = () => {
  return (
    <TopToolbar>
      <Button>Cerrar Conteo</Button>
    </TopToolbar>
  );
};
