import React from "react";
import { ModuleButton } from "./ModuleButton";
import { Grid } from "@mui/material";
const modules = [
  {
    name: "CFI",
    long_name: "Conteo Fisico de Inventario",
    image: "xxxx",
    link: "/cfi",
  },
  {
    name: "Usuarios",
    long_name: "Configuracion de Roles y Permisos",
    image: "xxxx",
    link: "/rbac",
  },
];
export const ModulesList = () => {
  return (
    <Grid container spacing={2}>
      {modules.map((mod, idx) => (
        <Grid item xs={4}>
          <ModuleButton key={`${idx}-${mod.name}`} link={mod.link} name={mod.name} />
        </Grid>
      ))}
    </Grid>
  );
};
