import { Edit, required, TextInput } from "react-admin";
import BaseEdit from "../../commons/components/BaseEdit";
import { ListItem, ListItemText, Stack, Box } from "@mui/material";
import { styles } from "../../commons/themes";
export const WHLocationTypesEdit = () => (
  <Edit>
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
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseEdit>
  </Edit>
);
