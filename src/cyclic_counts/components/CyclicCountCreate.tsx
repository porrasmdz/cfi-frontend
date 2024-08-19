import {
  AutocompleteInput,
  DateInput,
  Create,
  ReferenceInput,
  required,
  TextInput,
  ReferenceArrayInput,
  AutocompleteArrayInput,
  maxLength,
  minLength,
} from "react-admin";
import BaseEdit from "../../commons/components/BaseEdit";
import { ListItem, ListItemText, Stack, Box } from "@mui/material";
import { styles } from "../../commons/themes";
import { CyclicAlterContext } from "./CyclicAlterContext";
export const CyclicCountCreate = () => (
  <Create>
    <CyclicAlterContext>
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
                <ReferenceArrayInput
                  source="warehouse_ids"
                  reference="warehouses"
                >
                  <AutocompleteArrayInput
                    validate={[
                      required(),
                      minLength(1, "Elija al menos un almacen"),
                    ]}
                  />
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
              <DateInput
                sx={{ width: "25%" }}
                source="count_date_start"
                validate={required()}
              />
              <DateInput
                sx={{ width: "25%" }}
                source="count_date_finish"
                validate={required()}
              />
              <Box sx={{ width: "25%" }} position={"relative"} top={-2}>
                <ReferenceInput source="company_id" reference="companies">
                  <AutocompleteInput validate={required()} />
                </ReferenceInput>
              </Box>
            </Stack>
          </ListItemText>
        </ListItem>
      </BaseEdit>
    </CyclicAlterContext>
  </Create>
);
