import {
  Datagrid,
  DateField,
  EmailField,
  List,
  TextField,
  SimpleList,
  ReferenceField,
  EditButton,
  ReferenceInput,
  TextInput,
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/system";
import { DetailedCompany } from "../interfaces/ICompany";

const companyFilters = [
  <TextInput source="name" label="Search" alwaysOn />,
  <ReferenceInput
    source="corporate_group_id"
    label="Grupo"
    reference="corporative_groups"
  />,
];

export const CompaniesList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={companyFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: DetailedCompany) => record.name}
          secondaryText={(record: DetailedCompany) => record.ruc}
          tertiaryText={(record: DetailedCompany) => record.email}
          linkType="show"
        />
      ) : (
        <Datagrid>
          <TextField source="name" />
          <TextField source="codename" />
          <EmailField source="email" sx={{ textDecoration: "none" }} />
          <TextField source="ruc" />

          <ReferenceField
            source="corporate_group_id"
            reference="corporative_groups"
            sortBy="corporative_group.name"
          />
          
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
