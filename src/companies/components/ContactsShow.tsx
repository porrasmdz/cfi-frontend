import {
  BooleanField,
  DateField,
  EmailField,
  ReferenceField,
  Show,
  Labeled,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import {
  List,
  ListSubheader,
  Divider,
  ListItem,
  ListItemText,
  Stack,
  Box
} from "@mui/material";
import { styles } from "../../commons/themes";
export const ContactsShow = () => (
  <Show>
    <SimpleShowLayout>
      <List sx={{ width: "100%" }}>
        <ListSubheader>Id</ListSubheader>
        <Divider />
        <ListItem>
          <ListItemText>
            <Stack
              direction={"row"}
              justifyContent={styles.stackDefaults.justifyContent}
              spacing={styles.stackDefaults.spacing}
              sx={styles.stackDefaults.sx}
            >
              <TextField source="id" />
            </Stack>
          </ListItemText>
        </ListItem>
        <ListSubheader>Datos</ListSubheader>
        <Divider />
        <ListItem>
          <ListItemText sx={{ paddingTop: "0.6rem" }}>
            <Stack
              direction={"row"}
              justifyContent={styles.stackDefaults.justifyContent}
              spacing={styles.stackDefaults.spacing}
            >
              <Labeled sx={{ width: "25%" }}>
                <TextField source="full_name" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <TextField source="contact_number" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <TextField source="alt_contact_number" />
              </Labeled>

              <Labeled sx={{ width: "25%" }}>
                <EmailField source="email" />
              </Labeled>
            </Stack>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            <Stack
              direction={"row"}
              justifyContent={styles.stackDefaults.justifyContent}
              spacing={styles.stackDefaults.spacing}
              sx={{ paddingBottom: "0.6rem" }}
            >
              <Labeled sx={{ width: "25%" }}>
                <TextField source="employee_charge" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
              <ReferenceField
                  source="company_id"
                  reference="companies"
                />
              </Labeled>
              <Box sx={{ width: "25%" }}>
              </Box>
              <Box sx={{ width: "25%" }}>
              </Box>
              
            </Stack>
          </ListItemText>
        </ListItem>

        <ListSubheader>Edición</ListSubheader>
        <Divider />
        <ListItem>
          <ListItemText>
            <Stack
              direction={"row"}
              justifyContent={styles.stackDefaults.justifyContent}
              spacing={styles.stackDefaults.spacing}
              sx={styles.stackDefaults.sx}
            >
              <Labeled sx={{ width: "25%" }}>
                <DateField source="updated_at" />
              </Labeled>
              <Labeled sx={{ width: "25%" }}>
                <DateField source="created_at" />
              </Labeled>
              
              <Labeled sx={{ width: "25%" }}><Box/></Labeled>
              <Labeled sx={{ width: "25%" }}><Box/></Labeled>
            </Stack>
          </ListItemText>
        </ListItem>
      </List>
    </SimpleShowLayout>
    
  </Show>
);
