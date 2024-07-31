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
export const CorpGroupShow = () => (
  <Show>
    <SimpleShowLayout>
    <List sx={styles.showListSx}>
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
                <Labeled sx={{ width: "50%" }}>
                  <DateField source="updated_at" />
                </Labeled>
                <Labeled sx={{ width: "50%" }}>
                  <DateField source="created_at" />
                </Labeled>
              </Stack>
            </ListItemText>
          </ListItem>
        </List>
    </SimpleShowLayout>
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
