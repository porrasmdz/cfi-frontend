import {
  AutocompleteInput,
  DateInput,
  Edit,
  ReferenceInput,
  required,
  TextInput,
  ReferenceArrayInput,
  AutocompleteArrayInput
} from "react-admin";
import BaseEdit from "../../commons/components/BaseEdit";
import { ListItem, ListItemText, Stack, Box } from "@mui/material";
import { styles } from "../../commons/themes";
export const CyclicCountEdit = () => (
  <Edit>
    <BaseEdit>
      <ListItem>
        <ListItemText sx={{ paddingTop: "0.6rem" }}>
          <Stack
            direction={"row"}
            justifyContent={styles.stackDefaults.justifyContent}
            spacing={styles.stackDefaults.spacing}
          >
            <TextInput sx={{ width: "25%" }} source="name" validate={required()} />
            <TextInput sx={{ width: "25%" }} source="count_type" validate={required()} />
            <TextInput sx={{ width: "25%" }} source="status" validate={required()} />
            
            
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
                <ReferenceArrayInput source="warehouse_ids" reference="warehouses">
                  <AutocompleteArrayInput 
                validate={required()}/>
                </ReferenceArrayInput>
              </Box>
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseEdit>
  </Edit>
);
