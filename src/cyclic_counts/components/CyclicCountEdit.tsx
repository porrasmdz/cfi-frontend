import {
  AutocompleteInput,
  DateInput,
  Edit,
  ReferenceInput,
  required,
  TextInput,
  ReferenceArrayInput,
  AutocompleteArrayInput,
  SelectInput,
} from "react-admin";
import BaseEdit from "../../commons/components/BaseEdit";
import { ListItem, ListItemText, Stack, Box } from "@mui/material";
import { styles } from "../../commons/themes";
export const CyclicCountEdit = () => {
  const count_types = [
    { id: "Primer Conteo", name: "Primer Conteo" },
    { id: "Segundo Conteo", name: "Segundo Conteo" },
    { id: "Tercer Conteo", name: "Tercer Conteo" },
    { id: "Cuarto Conteo", name: "Cuarto Conteo" },
    { id: "Quinto Conteo", name: "Quinto Conteo" },
    { id: "Sexto Conteo", name: "Sexto Conteo" },
  ];
  const status = [
    { id: "Abierto", name: "Abierto" },
    { id: "Cerrado", name: "Cerrado" },
    { id: "En Revision", name: "En Revision" },
  ];
  return (
    <Edit>
      <BaseEdit>
        <ListItem>
          <ListItemText sx={{ paddingTop: "0.6rem" }}>
            <Stack
              direction={"row"}
              justifyContent={styles.stackDefaults.justifyContent}
              spacing={styles.stackDefaults.spacing}
            >
              <TextInput
                sx={{ width: "25%" }}
                source="name"
                validate={required()}
              />
              <SelectInput
                sx={{ width: "25%" }}
                source="count_type"
                choices={count_types}
                validate={required()}
              />
              <SelectInput
                sx={{ width: "25%" }}
                source="status"
                choices={status}
                validate={required()}
              />
            </Stack>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText sx={{ paddingTop: "0.6rem" }}>
            <Stack
              direction={"row"}
              justifyContent={styles.stackDefaults.justifyContent}
              spacing={styles.stackDefaults.spacing}
              alignItems={"center"}
            >
              <DateInput sx={{ width: "25%" }} source="count_date_start" />
              <DateInput sx={{ width: "25%" }} source="count_date_finish" />
              <Box sx={{ width: "25%" }} position={"relative"} top={-2}>
                <ReferenceArrayInput
                  source="warehouse_ids"
                  reference="warehouses"
                >
                  <AutocompleteArrayInput validate={required()} />
                </ReferenceArrayInput>
              </Box>
            
            </Stack>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText sx={{ paddingTop: "0.6rem" }}>
            <Stack
              direction={"row"}
              justifyContent={styles.stackDefaults.justifyContent}
              spacing={styles.stackDefaults.spacing}
              alignItems={"center"}
            >
             
              <Box sx={{ width: "25%" }}>
                <ReferenceInput source="parent_id" reference="cyclic_counts">
                  <AutocompleteInput label="Conteo Previo" />
                </ReferenceInput>
              </Box>
            </Stack>
          </ListItemText>
        </ListItem>
      </BaseEdit>
    </Edit>
  );
};
