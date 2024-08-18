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
  WithRecord,
  useDataProvider,
  useRecordContext,
  useRefresh,
  useRedirect,
  useNotify,
} from "react-admin";
import { Box, ListItemText, ListItem, Stack, Button } from "@mui/material";
import { styles } from "../../commons/themes";
import BaseShow from "../../commons/components/BaseShow";
import { NestedProductList } from "./NestedProductList";
import { useState } from "react";
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
          <WithRecord
           
            render={(record) => (
              
              record.id && <ReferenceManyField
                reference={`cyclic_count/${record.id}/products`}
                target="cyclic_counts.id"
                label=""
              >
                <NestedProductList />
              </ReferenceManyField> 
            )}
          />
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
  const dataProvider = useDataProvider()
  const record = useRecordContext()
  const [isLoading, setLoading] = useState(false)
  const redirect = useRedirect()
  const notify = useNotify()
///////////////////////////////////////////
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    
    setLoading(true)
    if (file) {
      console.log('Uploading file...');
  
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        // You can write the URL of your server or any other endpoint used for file upload
        const result = await fetch('http://127.0.0.1:8000/cyclic_counts/0c9446bc-f69b-475c-9212-a626a094a2e4/upload', {
          method: 'POST',
          body: formData,
        });
  
        const data = await result.json();
  
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      finally {
        
        setLoading(false)
      }
      
      setLoading(false)
    }
  };
  const uploadProductList = async () => {
    if (record?.id == null) return;
    setLoading(true)
    const new_cyclic_count = await dataProvider.closeCyclicCount(record.id)
    setLoading(false)
  }
//////////////////////////////////////////////////
  const closeCyclicCount = async () => {
    if (record?.id == null) return;
    setLoading(true)
    const new_cyclic_count = await dataProvider.closeCyclicCount(record.id)
    try {
        redirect('show', 'cyclic_counts', new_cyclic_count.id)
        notify("Conteo actualizado exitosamente", {"type": "success"})
      
    }
    catch(e) {
      notify(`Error al actualizar correo ${e}`, {"type": "success"})
    
    }
    finally {
      setLoading(false)
    }
   
      
    
  }
  return (
    <TopToolbar>
      {/* <input id="file" type="file" onChange={handleFileChange} />
      {file && <Button onClick={handleUpload} disabled={isLoading}>Subir Productos</Button>} */}
    
      <Button onClick={closeCyclicCount} disabled={isLoading}>Cerrar Conteo</Button>
    </TopToolbar>
  );
};
