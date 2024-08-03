import {
  ArrayField,
  BooleanField,
  Datagrid,
  DateField,
  EmailField,
  Show,
  SimpleShowLayout,
  TextField,
  TabbedShowLayout,
  ReferenceManyField,
  WrapperField,
  Labeled,
} from "react-admin";
import {
  Divider,
  Stack,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { styles } from "../../commons/themes";
import BaseShow from "../../commons/components/BaseShow";
export const CorpGroupShow = () => (
  <Show>
    <BaseShow>
      <ListItem>
        <ListItemText sx={{ paddingTop: "0.6rem" }}>
          <Stack
            direction={"row"}
            justifyContent={styles.stackDefaults.justifyContent}
            spacing={styles.stackDefaults.spacing}
          >
            <Labeled sx={{ width: "50%" }}>
              <TextField source="name" />
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
            <Labeled sx={{ width: "100%" }}>
              <TextField source="description" />
            </Labeled>
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseShow>
    <TabbedShowLayout>
      <TabbedShowLayout.Tab label="Companies">
        <ReferenceManyField reference="companies" target="corporate_group_id">
          <Datagrid>
            <TextField source="name" />
            <TextField source="phone_number" />
            <TextField source="cellphone_number" />
            <EmailField source="email" />
          </Datagrid>
        </ReferenceManyField>
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
