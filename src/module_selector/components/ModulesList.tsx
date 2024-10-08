import React from "react";
import { useAuthenticated } from "react-admin";
import { ModuleButton } from "./ModuleButton";
import { Grid } from "@mui/material";

const modules = [
  {
    name: "CFI",
    long_name: "Conteo Fisico de Inventario",
    image: "xxxx",
    link: "/cfi",
    icon: "../../../assets/box-icon.svg",
  },
  {
    name: "Metricas",
    long_name: "Conteo Fisico de Inventario",
    image: "xxxx",
    link: "/cfi",
    icon: "../../../assets/dashboard-icon.svg",
  },
  {
    name: "Usuarios",
    long_name: "Configuracion de Roles y Permisos",
    image: "xxxx",
    link: "/rbac",
    icon: "../../../assets/users-icon.svg",
  },
];
export const ModulesList = () => {
  useAuthenticated();
  return (
    <Grid
      container
      // spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {modules.map((mod, idx) => (
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={2}
          sm={4}
          md={4}
          key={`${idx}-${mod.name}`}
        >
          <ModuleButton link={mod.link} name={mod.name} icon={mod.icon} />
        </Grid>
      ))}
    </Grid>
  );
};
