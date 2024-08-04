import {
    Create,
    ReferenceInput,
    SimpleForm,
    TextInput,
    required,
    AutocompleteInput,
  } from "react-admin";
  
  import { ListItemText, Stack, ListItem, Box } from "@mui/material";
  import BaseEdit from "../../commons/components/BaseEdit";
  import { styles } from "../../commons/themes";
  
export const ContactsCreate = () => (
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
              source="full_name"
              validate={required()}
            />
            <TextInput sx={{ width: "25%" }} source="contact_number" validate={required()} />
            <TextInput sx={{ width: "25%" }} source="alt_contact_number" />

            <TextInput sx={{ width: "25%" }} source="email" validate={required()}  />
          </Stack>
        </ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText sx={{ paddingTop: "0.6rem" }}>
          <Stack
            direction={"row"}
            justifyContent={styles.stackDefaults.justifyContent}
            alignItems={'center'}
            spacing={styles.stackDefaults.spacing}
          >
            <TextInput sx={{ width: "25%" }} source="employee_charge" />
            <Box sx={{ width: "25%" }} position={'relative'} top={-2}>
              <ReferenceInput source="company_id" reference="companies">
                <AutocompleteInput validate={required()} />
              </ReferenceInput>
            </Box>
            <Box sx={{width: "25%"}}/>
            <Box sx={{width: "25%"}}/>
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseEdit>
    </Create>
);