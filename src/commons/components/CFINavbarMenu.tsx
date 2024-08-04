import { Menu } from "react-admin";
import { NestedMenuItemLink } from "./NestedMenuLink";
import { Stack, Theme, useMediaQuery, Box, ListItem } from "@mui/material";
import { Link } from "react-admin";

const linkStyle = {
  width: "100%",
  margin: 0,
  bgColor: "red",
  color: "inherit",
  textDecoration: "none",
  paddingX: "1.6rem",
  paddingY: ".2rem",
};
function CFINavbarMenu() {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  return (
    <Menu>
      {!isSmall ? (
        <Stack direction={"row"} alignItems={"center"}>
          <NestedMenuItemLink
            to="companies"
            multiTarget={["corporative_groups", "companies", "contacts"]}
            primaryText="Companias"
          >
            <Link sx={linkStyle} to={"corporative_groups"}>
              Grupos
            </Link>
            <Link sx={linkStyle} to={"companies"}>
              Compañías
            </Link>
            <Link sx={linkStyle} to={"contacts"}>
              Contactos
            </Link>
          </NestedMenuItemLink>
          <NestedMenuItemLink
            to="inventory"
            multiTarget={["warehouses", "whlocations", "products"]}
            primaryText="Inventario"
          >
            <Link sx={linkStyle} to={"warehouses"}>
              Almacenes
            </Link>
            <Link sx={linkStyle} to={"whlocations"}>
              Clasificaciones
            </Link>
            <Link sx={linkStyle} to={"products"}>
              Productos
            </Link>
          </NestedMenuItemLink>

          <NestedMenuItemLink to="cyclic_counts" primaryText="Conteos" />

          <NestedMenuItemLink
            to="admin"
            multiTarget={[
              "warehouse_types",
              "whlocation_types",
              "product_categories",
              "measure_units",
              "activity_registries",
              "count_registries"
            ]}
            primaryText="Admin"
          >
            <Link sx={linkStyle} to={"warehouse_types"}>
              Tipos de Bodega
            </Link>
            <Link sx={linkStyle} to={"whlocation_types"}>
              Tipos de Clasificacion
            </Link>
            <Link sx={linkStyle} to={"product_categories"}>
              Categorias de Producto
            </Link>
            <Link sx={linkStyle} to={"measure_units"}>
              Unidades de Medida
            </Link>
            <Link sx={linkStyle} to={"count_registries"}>
              Registros de Conteo
            </Link>
            <Link sx={linkStyle} to={"activity_registries"}>
              Registros de Actividad
            </Link>
          </NestedMenuItemLink>
        </Stack>
      ) : (
        <Box></Box>
      )}
    </Menu>
  );
}

export default CFINavbarMenu;
