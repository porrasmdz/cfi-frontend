import {
  ArrayField,
  DatagridConfigurable,
  DateField,
  Labeled,
  ReferenceField,
  Show,
  SingleFieldList,
  EditButton,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  List,
  ChipField,
  TabbedShowLayout,
  TextField,
  ReferenceManyField,
  NumberField,
  SelectColumnsButton,
  SearchInput,
  TextInput,
  ReferenceInput,
  ShowBase,
  ReferenceOneField,
} from "react-admin";
import { Box, ListItemText, ListItem, Stack, Button } from "@mui/material";
import { styles } from "../../commons/themes";
import BaseShow from "../../commons/components/BaseShow";
import AggregationTable from "../../commons/components/AggregationTable";

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
const ProductListActions = () => (
  <TopToolbar>
    <SelectColumnsButton preferenceKey="products.datagrid" />
    <FilterButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const cyclicProductFilters = [
  <SearchInput placeholder="Nombre" source="name" alwaysOn />,
  <TextInput placeholder="Codigo" source="code" />,
  <ReferenceInput
    placeholder="U.Medida"
    source="measure_unit_id"
    reference="measure_units"
  />,
];

const NestedProductList = () => {
  return (
    <List filters={cyclicProductFilters} actions={<ProductListActions />}>
      <DatagridConfigurable rowClick={false}>
        <TextField source="code" />
        <TextField source="name" />
        <ArrayField source="warehouses" sortBy="warehouses.name">
          <SingleFieldList linkType={false}>
            <ChipField source="name" />
          </SingleFieldList>
        </ArrayField>
        <ArrayField
          source="warehouse_locations"
          sortBy="warehouse_locations.name"
        >
          <SingleFieldList linkType={false}>
            <ChipField source="name" />
          </SingleFieldList>
        </ArrayField>

        <ReferenceField
          source="warehouse_type_id"
          reference="warehouse_types"
          sortBy="warehouse_types.name"
        />

        <NumberField source="unit_cost" />
        <ReferenceOneField
          label="U. Sistema"
          reference="count_registries"
          target="product_id"
          emptyText="n/a"
          link={false}
        >
          <TextField source="registry_units" />
        </ReferenceOneField>
      </DatagridConfigurable>
    </List>
  );
};
