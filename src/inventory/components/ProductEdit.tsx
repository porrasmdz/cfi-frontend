import {
  AutocompleteInput,
  Edit,
  ReferenceInput,
  required,
  TextInput,
  NumberInput,
  SimpleForm,
  AutocompleteArrayInput,
  maxLength,
  ReferenceArrayInput,
} from "react-admin";
import BaseEdit from "../../commons/components/BaseEdit";
import { ListItem, ListItemText, Stack, Box } from "@mui/material";
import { styles } from "../../commons/themes";
import { ProductAlterContext } from "./ProductAlterContext";
export const ProductEdit = () => (
  <Edit>
    <ProductAlterContext>
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
                  source="category_id"
                  reference="product_categories"
                >
                  <AutocompleteInput validate={required()} />
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
        <ListItem>
          <ListItemText sx={{ paddingTop: "0.6rem" }}>
            <Stack
              direction={"row"}
              justifyContent={styles.stackDefaults.justifyContent}
              spacing={styles.stackDefaults.spacing}
              alignItems={"center"}
            >
              <Box sx={{ width: "25%" }} position={"relative"} top={-2}>
                <ReferenceArrayInput
                  source="warehouse_ids"
                  reference="warehouses"
                >
                  <AutocompleteArrayInput validate={required()} />
                </ReferenceArrayInput>
              </Box>

              <Box sx={{ width: "25%" }} position={"relative"} top={-2}>
                <ReferenceArrayInput
                  source="cyclic_count_ids"
                  reference="cyclic_counts"
                  
                >
                  <AutocompleteArrayInput
                    validate={[
                      required(),
                      maxLength(1, "Solo puede elegir un conteo"),
                    ]}
                  
                  />
                </ReferenceArrayInput>
              </Box>

              <Box sx={{ width: "25%" }} position={"relative"} top={-2}>
                <ReferenceArrayInput
                  source="whlocation_ids"
                  reference="whlocations"
                >
                  <AutocompleteArrayInput />
                </ReferenceArrayInput>
              </Box>
            </Stack>
          </ListItemText>
        </ListItem>
      </BaseEdit>
    </ProductAlterContext>
  </Edit>
);
