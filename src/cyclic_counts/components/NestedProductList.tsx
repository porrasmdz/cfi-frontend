import { Grid, Button } from "@mui/material";
import { useState, useEffect } from "react";
import {
  TopToolbar,
  SelectColumnsButton,
  FilterButton,
  CreateButton,
  ExportButton,
  SearchInput,
  TextInput,
  ReferenceInput,
  useRecordContext,
  useDataProvider,
  useNotify,
  useRefresh,
  List,
  DatagridConfigurable,
  TextField,
  ArrayField,
  SingleFieldList,
  ChipField,
  ReferenceField,
  NumberField,
  ReferenceOneField,
  CreateBase,
  SaveContextProvider,
  SimpleForm,
  NumberInput,
  RecordContextProvider,
  WrapperField,
} from "react-admin";
import BaseDialog from "../../commons/components/BaseDialog";
import { ReadProduct } from "../../inventory/interfaces/IProduct";
import {
  ReadCountRegistry,
  CreateCountRegistry,
  UpdateCountRegistry,
} from "../interfaces/ICountRegistry";
import { ReadCyclicCount } from "../interfaces/ICyclicCount";

export const NestedProductList = () => {
  const cyclic_count = useRecordContext<ReadCyclicCount>();
  const [open, setOpen] = useState(false);
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const refresh = useRefresh();
  const [countProduct, setCountProduct] = useState<ReadProduct | null>(null);
  const [loadingRegistry, setLoadingRegistry] = useState(false);
  const [connectionError, setConnectionError] = useState(null);
  const [countRegistry, setCountRegistry] = useState<ReadCountRegistry | null>(
    null
  );
  const saving = false;
  const mutationMode = "pessimistic";
  const save = (data: CreateCountRegistry | UpdateCountRegistry) => {
    if (loadingRegistry || connectionError != null) {
      notify(`Error de red. Revise su conexión a wifi.`, {
        type: "error",
      });
      return;
    }
    if (
      countProduct === null ||
      cyclic_count === null ||
      cyclic_count === undefined
    ) {
      notify(`Error al cargar el conteo o seleccionar el producto `, {
        type: "error",
      });
      return;
    }
    const counted_units = data?.registry_units ?? 0;
    const count_registry: CreateCountRegistry = {
      registry_type: "physical",
      registry_units: counted_units,
      registry_cost: countProduct.unit_cost * counted_units,
      difference_units: 0,
      difference_cost: 0,
      product_id: countProduct.id ?? "",
      cyclic_count_id: cyclic_count.id.toString() ?? "",
    };
    if (countRegistry != null) {
      dataProvider
        .update("count_registries", {
          id: countRegistry.id,
          data: count_registry,
          previousData: undefined,
        })
        .then((res) => {
          notify(`Conteo actualizado con éxito `, { type: "success" });
          refresh();
          handleClose();
        })
        .catch((err) =>
          notify(`Error al registrar Conteo ${err}`, { type: "error" })
        );
    } else {
      dataProvider
        .create("count_registries", {
          data: count_registry,
        })
        .then((res) => {
          notify(`Conteo registrado con éxito `, { type: "success" });
          refresh();
          handleClose();
        })
        .catch((err) =>
          notify(`Error al registrar Conteo ${err}`, { type: "error" })
        );
    }

    return null;
  };
  useEffect(() => {
    setConnectionError(null);
    if (countProduct === null) {
      setCountRegistry(null);
      return;
    }
    setLoadingRegistry(true);
    dataProvider
      .getList("count_registries", {
        pagination: { page: 1, perPage: 10 },
        filter: {
          registry_type: "physical",
          cyclic_count_id: cyclic_count?.id ?? "",
          product_id: countProduct.id ?? "",
        },
        sort: { field: "updated_at", order: "DESC" },
      })
      .then((res) =>
        res.data.length > 0
          ? setCountRegistry(res.data[0])
          : setCountRegistry(null)
      )
      .catch((err) => {
        setCountRegistry(null);
        setConnectionError(err);
      })
      .finally(() => setLoadingRegistry(false));
  }, [countProduct]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCountProduct(null);
    setCountRegistry(null);
  };
  return (
    <>
      <List
      
        filters={cyclicProductFilters}
        actions={<ProductListActions />}
        disableSyncWithLocation
      >
        <DatagridConfigurable preferenceKey="products.datagrid" rowClick={false} >
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

          <ArrayField
            source="count_registries"
            label="U. Sistema"
            filter={{ registry_type: "system" }}
          >
            <SingleFieldList empty={<>n/c</>} linkType={false}>
              <TextField source="registry_units"></TextField>
            </SingleFieldList>
          </ArrayField>
          <ArrayField
            source="count_registries"
            label="U. Fisico"
            filter={{ registry_type: "physical" }}
          >
            <SingleFieldList empty={<>n/c</>} linkType={false}>
              <TextField source="registry_units"></TextField>
            </SingleFieldList>
          </ArrayField>
          <ArrayField
            source="count_registries"
            label="Valor Fisico"
            filter={{ registry_type: "physical" }}
          >
            <SingleFieldList empty={<>n/c</>} linkType={false}>
              <TextField source="registry_cost"></TextField>
            </SingleFieldList>
          </ArrayField>

          <WrapperField label="Acciones">
            <TriggerCreateDialogButton
              setOpen={handleOpen}
              setProductToCount={setCountProduct}
            />
          </WrapperField>
        </DatagridConfigurable>
      </List>

      <BaseDialog
        open={open}
        handleClose={handleClose}
        title={`Conteo de: ${countProduct?.code ?? "###"} | ${
          countProduct?.name ?? "#####"
        }`}
      >
        <CreateBase resource="count_registries">
          <SaveContextProvider value={{ save, saving, mutationMode }}>
            <SimpleForm>
              <Grid sx={{ bgColor: "transparent" }} container>
                <Grid item xs={12}>
                  <NumberInput defaultValue={0} source="registry_units" />
                </Grid>
              </Grid>
            </SimpleForm>
          </SaveContextProvider>
        </CreateBase>
      </BaseDialog>
    </>
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

//@ts-ignore
const TriggerCreateDialogButton = ({ setOpen, setProductToCount,
  ...props
}) => {
  const record = useRecordContext();
  const handleOpen = () => {
    setProductToCount(record);

    setOpen(true);
  };
  return <Button onClick={handleOpen}>Contar</Button>;
};

//   <ReferenceOneField
//   label="U. Sistema"
//   reference="count_registries"
//   target="product_id"
//   filter={{
//     registry_type: "system",
//     cyclic_count_id: cyclic_count?.id ?? "",
//   }}
//   emptyText="n/a"
//   link={false}
// >
//   <TextField source="registry_units" />
// </ReferenceOneField>
// <ReferenceOneField
//   label="U. Físicas"
//   reference="count_registries"
//   target="product_id"
//   filter={{
//     registry_type: "physical",
//     cyclic_count_id: cyclic_count?.id ?? "",
//   }}
//   emptyText="n/c"
//   link={false}
// >
//   <TextField source="registry_units" />
// </ReferenceOneField>
// <ReferenceOneField
//   label="Valor Físico"
//   reference="count_registries"
//   target="product_id"
//   filter={{
//     registry_type: "physical",
//     cyclic_count_id: cyclic_count?.id ?? "",
//   }}
//   emptyText="n/c"
//   link={false}
// >
//   <TextField source="registry_cost" />
// </ReferenceOneField>
