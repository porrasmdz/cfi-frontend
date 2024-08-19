import {
    SaveContextProvider,
    useRedirect,
    useNotify,
    useDataProvider,
  } from "react-admin";
import { CreateCyclicCount, UpdateCyclicCount } from "../interfaces/ICyclicCount";
  //@ts-ignore
  export const CyclicAlterContext = ({ children }) => {
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const redirect = useRedirect();
    const save = async (data: CreateCyclicCount | UpdateCyclicCount) => {
      const cyclic_count: CreateCyclicCount = {
          name: data.name ?? "",
          count_type: data.count_type ?? "Primer Conteo",
          count_date_start: data.count_date_start ?? "",
          status: data.status ?? "Abierto",
          count_date_finish: data.count_date_finish ?? "",
          warehouse_ids: data.warehouse_ids ?? [],
          company_id: data?.company_id ?? "",
          parent_id: data?.parent_id 
      };
     const cyclic_count_id = data?.id ?? null
      if (cyclic_count_id != null) {
        
      console.log("######EDIT RESOURCE", cyclic_count, data)
      return
        dataProvider
          .update("cyclic_counts", {
            id: cyclic_count_id,
            data: cyclic_count,
            previousData: undefined,
          })
          .then((res) => {
            notify(`Conteo Ciclico actualizado exitosamente`, { type: "success" });
            redirect("list", "cyclic_counts");
          })
          .catch((err) =>
            notify(`Error al actualizar conteo ${err}`, { type: "error" })
          );
  
      } else {
        dataProvider
          .create("cyclic_counts", {
            data: cyclic_count,
          })
          .then((res) => {
                notify(`Conteo creado exitosamente`, { type: "success" });
                redirect("list", "cyclic_counts");
              
          })
          .catch((err) =>
            notify(`Error al crear Conteo ${err}`, { type: "error" })
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
  