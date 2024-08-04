import {
  AutocompleteInput,
  Edit,
  ReferenceInput,
  required,
  TextInput,
  SimpleForm,
} from "react-admin";
import BaseEdit from "../../commons/components/BaseEdit";
import { ListItem, ListItemText, Stack, Box } from "@mui/material";
import { styles } from "../../commons/themes";

export const WHLocationEdit = () => (
  <Edit>
    <BaseEdit>
      <ListItem>
        <ListItemText sx={{ paddingTop: "0.6rem" }}>
          <Stack
            direction={"row"}
            justifyContent={styles.stackDefaults.justifyContent}
            spacing={styles.stackDefaults.spacing}
            alignItems={"center"}
          >
            <TextInput
              sx={{ width: "25%" }}
              source="name"
              validate={required()}
            />

            <Box sx={{ width: "25%" }} position={"relative"} top={-2}>
              <ReferenceInput source="warehouse_id" reference="warehouses">
                <AutocompleteInput validate={required()} />
              </ReferenceInput>
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
            <TextInput sx={{ width: "53%" }} source="description" multiline />
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
            <Box sx={{ width: "25%" }} position={"relative"} top={-2}>
              <ReferenceInput source="parent_id" reference="whlocations">
                <AutocompleteInput />
              </ReferenceInput>
            </Box>
            <Box sx={{ width: "25%" }} position={"relative"} top={-2}>
              <ReferenceInput
                source="wh_location_type_id"
                reference="whlocation_types"
              >
                <AutocompleteInput />
              </ReferenceInput>
            </Box>
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseEdit>
  </Edit>
);
