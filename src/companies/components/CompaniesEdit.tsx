import { DateInput, Edit, ReferenceInput, TextInput } from "react-admin";
import { ListItemText, Stack, ListItem, Box } from "@mui/material";
import { styles } from "../../commons/themes";
import BaseEdit from "../../commons/components/BaseEdit";
export const CompaniesEdit = () => (
  // sx={{width: "60%", alignSelf:"center"}}
  <Edit >
    <BaseEdit>
      <ListItem>
        <ListItemText sx={{ paddingTop: "0.6rem" }}>
          <Stack
            direction={"row"}
            justifyContent={styles.stackDefaults.justifyContent}
            spacing={styles.stackDefaults.spacing}
          >
            <TextInput sx={{ width: "25%" }} source="name" />
            <TextInput sx={{ width: "25%" }} source="codename" />
            <TextInput sx={{ width: "25%" }} source="phone_number" />

            <TextInput sx={{ width: "25%" }} source="cellphone_number" />
          </Stack>
        </ListItemText>
      </ListItem>

      <ListItem>
        <ListItemText sx={{ paddingY: "0.6rem" }}>
          <Stack
            direction={"row"}
            justifyContent={styles.stackDefaults.justifyContent}
            spacing={styles.stackDefaults.spacing}
            alignItems={"center"}
          >
            <TextInput sx={{ width: "25%" }} source="email" />
            <TextInput sx={{ width: "25%" }} source="ruc" />
            <DateInput sx={{ width: "25%" }} source="foundation_date" />
            <Box width={"25%"} position={'relative'} top={-2} >
              <ReferenceInput
                source="corporate_group_id"
                reference="corporative_groups"
              />
            </Box>
          </Stack>
        </ListItemText>
      </ListItem>
    </BaseEdit>
  </Edit>
);
