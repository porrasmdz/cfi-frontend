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

export const WarehouseEdit = () => (
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
              <ReferenceInput
                source="warehouse_type_id"
                reference="warehouse_types"
              >
                <AutocompleteInput validate={required()} />
              </ReferenceInput>
            </Box>
            <Box sx={{ width: "25%" }} position={"relative"} top={-2}>
              <ReferenceInput source="company_id" reference="companies">
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
            <TextInput sx={{ width: "25%" }} source="country" />
            <TextInput sx={{ width: "25%" }} source="state" />
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
            <TextInput sx={{ width: "25%" }} source="city" />
            <TextInput sx={{ width: "25%" }} source="address" />
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseEdit>
  </Edit>
);
