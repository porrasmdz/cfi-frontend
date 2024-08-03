import {
  BooleanField,
  DateField,
  EmailField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  ArrayField,
  Datagrid,
  TabbedShowLayout,
  ReferenceManyField,
  Labeled,
} from "react-admin";

import {
  Divider,
  Stack,
  List,
  ListItem,
  Box,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import BaseShow from "../../commons/components/BaseShow";
import { styles } from "../../commons/themes";

export const CompaniesShow = () => (
  // sx={{width: "50%", alignSelf: "center", marginY: "1.2rem"}}
  <Show >
    <BaseShow>
      <ListItem>
        <ListItemText sx={{ paddingTop: "0.6rem" }}>
          <Stack
            direction={"row"}
            justifyContent={styles.stackDefaults.justifyContent}
            spacing={styles.stackDefaults.spacing}
          >
            <Labeled sx={{ width: "25%" }}>
              <TextField source="name" />
            </Labeled>
            <Labeled sx={{ width: "25%" }}>
              <TextField source="codename" />
            </Labeled>
            <Labeled sx={{ width: "25%" }}>
              <TextField source="phone_number" />
            </Labeled>

            <Labeled sx={{ width: "25%" }}>
              <TextField source="cellphone_number" />
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
              <EmailField source="email" />
            </Labeled>
            <Labeled sx={{ width: "25%" }}>
              <TextField source="ruc" />
            </Labeled>
            <Labeled sx={{ width: "25%" }}>
              <DateField source="foundation_date" />
            </Labeled>
            <Labeled sx={{ width: "25%" }}>
              <ReferenceField
                source="corporate_group_id"
                reference="corporative_groups"
              />
            </Labeled>
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseShow>

    <TabbedShowLayout>
      <TabbedShowLayout.Tab label="Contactos">
        <ReferenceManyField reference="contacts" target="company_id">
          <Datagrid>
            <TextField source="full_name" />
            <TextField source="contact_number" />
            <EmailField source="email" />
          </Datagrid>
        </ReferenceManyField>
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="Bodegas">
        <Stack> </Stack>
      </TabbedShowLayout.Tab>
      <TabbedShowLayout.Tab label="Usuarios">
        <Stack> </Stack>
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
