import {
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
  Box,
} from "@mui/material";
import { styles } from "../../commons/themes";
import BaseShow from "../../commons/components/BaseShow";
export const ContactsShow = () => (
  <Show>
    <BaseShow>
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
              <ReferenceField source="company_id" reference="companies" />
            </Labeled>
            <Box sx={{ width: "25%" }}></Box>
            <Box sx={{ width: "25%" }}></Box>
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseShow>
  </Show>
);
