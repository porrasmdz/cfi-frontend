import {
  AutocompleteInput,
  Create,
  ReferenceInput,
  required,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import BaseEdit from "../../commons/components/BaseEdit";
import { ListItem, ListItemText, Stack, Box } from "@mui/material";
import { styles } from "../../commons/themes";
const filterToQuery = (searchText:string) => ({ name: `${searchText}` });
export const CountRegistryCreate = () => (
  <Create>
    <BaseEdit>
      <ListItem>
        <ListItemText sx={{ paddingTop: "0.6rem" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={styles.stackDefaults.justifyContent}
            spacing={styles.stackDefaults.spacing}
          >
            <SelectInput
              source="registry_type"
              choices={[
                { id: "system", name: "Sistema" },
                { id: "physical", name: "Físico" },
                { id: "consolidated", name: "Consolidado" },

              ]}
              validate={required()}
            />

            <Box width={"25%"} position={"relative"} top={-2}>
              <ReferenceInput source="product_id" reference="products">
                <AutocompleteInput filterToQuery={filterToQuery} validate={required()} />
              </ReferenceInput>
            </Box>
            <Box width={"25%"} position={"relative"} top={-2}>
              <ReferenceInput
                source="cyclic_count_id"
                reference="cyclic_counts"
              >
                <AutocompleteInput filterToQuery={filterToQuery} validate={required()} />
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
          >
            <NumberInput
              sx={{ width: "25%" }}
              source="registry_units"
              validate={required()}
            />
            <NumberInput sx={{ width: "25%" }} source="registry_cost" />
          </Stack>
        </ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText sx={{ paddingTop: "0.6rem" }}>
          <Stack
            direction={"row"}
            justifyContent={styles.stackDefaults.justifyContent}
            spacing={styles.stackDefaults.spacing}
          >
            <NumberInput
              sx={{ width: "25%" }}
              source="difference_units"
              validate={required()}
            />
            <NumberInput sx={{ width: "25%" }} source="difference_cost" />
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseEdit>
  </Create>
);
