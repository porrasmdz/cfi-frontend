import { Create, TextInput, required } from "react-admin";
import { ListItem, ListItemText, Stack } from "@mui/material";
import BaseEdit from "../../commons/components/BaseEdit";
import { styles } from "../../commons/themes";

export const CorpGroupCreate = () => (
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
              source="name"
              validate={[required()]}
            />
          </Stack>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText sx={{ paddingTop: "0.6rem" }}>
          <Stack
            direction={"row"}
            justifyContent={styles.stackDefaults.justifyContent}
            spacing={styles.stackDefaults.spacing}
          >
          
            <TextInput sx={{ width: "25%" }} source="description" multiline />
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseEdit>
  </Create>
);
