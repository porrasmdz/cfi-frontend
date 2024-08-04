import { Create, required, TextInput } from "react-admin";
import BaseEdit from "../../commons/components/BaseEdit";
import { ListItem, ListItemText, Stack } from "@mui/material";
import { styles } from "../../commons/themes";
export const ProductCategoryCreate = () => (
  <Create>
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
            <TextInput sx={{ width: "25%" }} source="short_codename" />
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseEdit>
  </Create>
);
