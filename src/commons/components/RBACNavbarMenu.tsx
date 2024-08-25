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
function RBACNavbarMenu() {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  return (
    <Menu>
      {!isSmall ? (
        <Stack direction={"row"} alignItems={"center"}>
         
          <NestedMenuItemLink to="users" primaryText="Usuarios" />
          <NestedMenuItemLink to="roles" primaryText="Roles" />
          <NestedMenuItemLink to="permissions" primaryText="Permisos" />

         
        </Stack>
      ) : (
        <Box></Box>
      )}
    </Menu>
  );
}

export default RBACNavbarMenu;
