import {
  Labeled,
  TabbedShowLayout,
  Show,
  TextField,
} from "react-admin";
import { styles } from "../../commons/themes";
import {
  ListItemText,
  ListItem,
  Stack,
} from "@mui/material";
import BaseShow from "../../commons/components/BaseShow";
export const WHTypeShow = () => (
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

            <Labeled sx={{ width: "50%" }}>
              <TextField source="description" />
            </Labeled>
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseShow>

    <TabbedShowLayout>
      <TabbedShowLayout.Tab label="Bodegas">
        <Stack> </Stack>
      </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
