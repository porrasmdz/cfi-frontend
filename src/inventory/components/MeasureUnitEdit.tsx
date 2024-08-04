import {
  AutocompleteInput,
  Edit,
  ReferenceInput,
  required,
  TextInput,
} from "react-admin";
import BaseEdit from "../../commons/components/BaseEdit";
import { ListItem, ListItemText, Stack, Box } from "@mui/material";
import { styles } from "../../commons/themes";
export const MeasureUnitEdit = () => (
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
            <TextInput sx={{ width: "25%" }} source="conversion_formula" />
            <Box sx={{ width: "25%" }} position={"relative"} top={-2}>
              <ReferenceInput source="parent_id" reference="measure_units">
                <AutocompleteInput />
              </ReferenceInput>
            </Box>
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseEdit>
  </Edit>
);
