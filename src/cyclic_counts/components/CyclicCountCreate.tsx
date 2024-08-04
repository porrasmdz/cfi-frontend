import {
  AutocompleteInput,
  DateInput,
  Create,
  ReferenceInput,
  required,
  TextInput,
} from "react-admin";
import BaseEdit from "../../commons/components/BaseEdit";
import { ListItem, ListItemText, Stack, Box } from "@mui/material";
import { styles } from "../../commons/themes";
export const CyclicCountCreate = () => (
  <Create>
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
            <TextInput
              sx={{ width: "25%" }}
              source="count_type"
              validate={required()}
            />
            <TextInput
              sx={{ width: "25%" }}
              source="status"
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
            <Box sx={{ width: "25%" }}>
              <ReferenceInput source="parent_id" reference="cyclic_counts">
                <AutocompleteInput />
              </ReferenceInput>
            </Box>
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseEdit>
  </Create>
);
