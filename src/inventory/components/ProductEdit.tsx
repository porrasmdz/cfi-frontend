import {
  AutocompleteInput,
  Edit,
  ReferenceInput,
  required,
  TextInput,
  NumberInput,
  SimpleForm,
} from "react-admin";
import BaseEdit from "../../commons/components/BaseEdit";
import { ListItem, ListItemText, Stack, Box } from "@mui/material";
import { styles } from "../../commons/themes";

export const ProductEdit = () => (
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
              <ReferenceInput source="category_id" reference="product_categories">
                <AutocompleteInput 
              validate={required()}/>
              </ReferenceInput>
            </Box>
            <Box sx={{ width: "25%" }} position={"relative"} top={-2}>
              <ReferenceInput
                source="measure_unit_id"
                reference="measure_units"
              >
                <AutocompleteInput />
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
            <NumberInput
              sx={{ width: "25%" }}
              source="unit_cost"
              validate={required()}
            />
            <TextInput sx={{ width: "25%" }} source="code" />
            
            <TextInput sx={{ width: "25%" }} source="sku" />
            
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseEdit>
  </Edit>
);
