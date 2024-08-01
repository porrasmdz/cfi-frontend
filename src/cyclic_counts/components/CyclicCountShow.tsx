import {
  ArrayField,
  BooleanField,
  Datagrid,
  DateField,
  EmailField,
  Labeled,
  ReferenceField,
  ReferenceManyField,
  Show,
  SimpleShowLayout,
  TabbedShowLayout,
  TextField,
} from "react-admin";
import {
  List,
  ListSubheader,
  Divider,
  Box,
  ListItemText,
  ListItem,
  Stack,
} from "@mui/material";
import { styles } from "../../commons/themes";

export const CyclicCountShow = () => {
  const handleSubmit = (event: any) => {
    
    event.stopPropagation();
    event.preventDefault();
    (event as MouseEvent).stopPropagation()
    if (event instanceof MouseEvent){
        event.stopPropagation();
        event.preventDefault();
    } 
  }
  return (
    <Show>
      <SimpleShowLayout>
        <List sx={{ width: "100%" }}>
          <ListSubheader>Id</ListSubheader>
          <Divider />
          <ListItem>
            <ListItemText>
              <Stack
                direction={"row"}
                justifyContent={styles.stackDefaults.justifyContent}
                spacing={styles.stackDefaults.spacing}
                sx={styles.stackDefaults.sx}
              >
                <TextField source="id" />
              </Stack>
            </ListItemText>
          </ListItem>
          <ListSubheader>Datos</ListSubheader>
          <Divider />
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

          <ListSubheader>Edición</ListSubheader>
          <Divider />
          <ListItem>
            <ListItemText>
              <Stack
                direction={"row"}
                justifyContent={styles.stackDefaults.justifyContent}
                spacing={styles.stackDefaults.spacing}
                sx={styles.stackDefaults.sx}
              >
                <Labeled sx={{ width: "25%" }}>
                  <DateField source="updated_at" />
                </Labeled>
                <Labeled sx={{ width: "25%" }}>
                  <DateField source="created_at" />
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
        </List>
      </SimpleShowLayout>
      <TabbedShowLayout >
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
