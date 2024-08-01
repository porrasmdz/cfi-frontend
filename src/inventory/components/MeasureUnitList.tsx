import {
  SimpleList,
  Datagrid,
  List,
  ReferenceField,
  SearchInput,
  TextField,
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/system";
import { DetailedMeasureUnit } from "../interfaces/IMeasureUnit";

const measureUnitFilters = [
  <SearchInput placeholder="Unidad de Medida" source="name" alwaysOn />,
];
export const MeasureUnitList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List filters={measureUnitFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record: DetailedMeasureUnit) => record.name}
          secondaryText={(record: DetailedMeasureUnit) =>
            record.conversion_formula
          }
          tertiaryText={(record: DetailedMeasureUnit) => record.parent_id}
          linkType="show"
        />
      ) : (
        <Datagrid>
          <TextField source="name" />
          <TextField source="conversion_formula" />
          <ReferenceField source="parent_id" reference="parents" />
        </Datagrid>
      )}
    </List>
  );
};
