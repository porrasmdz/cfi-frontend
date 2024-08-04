import {
  AutocompleteInput,
  DateInput,
  Edit,
  SimpleForm,
  ReferenceInput,
  required,
  TextInput,
} from "react-admin";
import BaseEdit from "../../commons/components/BaseEdit";
import { ListItem, ListItemText, Stack, Box } from "@mui/material";
import { styles } from "../../commons/themes";
export const ActivityRegistryEdit = () => (
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
              source="detail"
              validate={required()}
            />
            <TextInput sx={{ width: "25%" }} source="commentary" />
            <TextInput
              sx={{ width: "25%" }}
              source="user"
              validate={required()}
            />
            <Box sx={{ width: "25%" }}>
              <ReferenceInput
                source="count_registry_id"
                reference="count_registries"
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
