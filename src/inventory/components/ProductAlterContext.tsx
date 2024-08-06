import {
  SaveContextProvider,
  useRedirect,
  useNotify,
  useDataProvider,
} from "react-admin";
import { CreateProduct, UpdateProduct } from "../interfaces/IProduct";
import { CreateCountRegistry } from "../../cyclic_counts/interfaces/ICountRegistry";
//@ts-ignore
export const ProductAlterContext = ({ children }) => {
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const redirect = useRedirect();
  const save = async (data: CreateProduct | UpdateProduct) => {
    const product = { ...data };
    delete product.system_units;

    const count_registry: CreateCountRegistry = {
      registry_type: "system",
      registry_units: data.system_units ?? 0,
      registry_cost: (data?.system_units ?? 0) * (data.unit_cost ?? 0),
      difference_units: 0,
      difference_cost: 0,
      product_id: "",

      cyclic_count_id:
        data?.cyclic_count_ids != undefined ? data.cyclic_count_ids[0] : "",
    };

    if (data.id != null) {
      count_registry.product_id = data.id;
      console.log("ACTUALIZANDO", product);
      dataProvider
        .update("products", {
          id: data.id,
          data: product,
          previousData: undefined,
        })
        .then((res) => {
          notify(`Producto actualizado exitosamente`, { type: "success" });
          redirect("list", "products");
        })
        .catch((err) =>
          notify(`Error al crear Producto ${err}`, { type: "error" })
        );

      // create("products", )
    } else {
      dataProvider
        .create("products", {
          data: product,
        })
        .then((res) => {
          count_registry.product_id = res.data.id;
          dataProvider
            .create("count_registries", {
              data: count_registry,
            })
            .then((cr_res) => {
              notify(`Producto creado exitosamente`, { type: "success" });
              redirect("list", "products");
            });
        })
        .catch((err) =>
          notify(`Error al crear Producto ${err}`, { type: "error" })
        );
    }
  };
  const saving = false;
  const mutationMode = "pessimistic";
  return (
    <SaveContextProvider value={{ save, saving, mutationMode }}>
      {children}
    </SaveContextProvider>
  );
};
