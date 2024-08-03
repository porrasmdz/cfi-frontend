import {
  BooleanField,
  DateField,
  Labeled,
  TabbedShowLayout,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { styles } from "../../commons/themes";
import {
  List,
  Box,
  ListSubheader,
  Divider,
  ListItemText,
  ListItem,
  Stack,
} from "@mui/material";
import BaseShow from "../../commons/components/BaseShow";
export const WHLocationTypesShow = () => (
  <Show>
    <BaseShow>
      <ListItem>
        <ListItemText sx={{ paddingY: "0.6rem" }}>
          <Stack
            direction={"row"}
            justifyContent={styles.stackDefaults.justifyContent}
            spacing={styles.stackDefaults.spacing}
          >
            <Labeled sx={{ width: "25%" }}>
              <TextField source="name" />
            </Labeled>
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseShow>

    <TabbedShowLayout>
      <TabbedShowLayout.Tab label="Ubicaciones de este Tipo">
        <Stack> </Stack>
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
