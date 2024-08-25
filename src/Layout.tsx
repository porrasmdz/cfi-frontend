import { useState, type ReactNode } from "react";
import {
  Layout as RALayout,
  CheckForApplicationUpdate,
  Sidebar,
  SidebarProps,
  SidebarClasses,
  useLocale,
  useSidebarState,
} from "react-admin";
import { CFIAppBar } from "./commons/components/CFIAppBar";
import {
  useMediaQuery,
  Theme,
  Stack,
  Box,
  Card,
  CardContent,
  Drawer,
} from "@mui/material";
import { RBACAppBar } from "./commons/components/RBACAppBar";
import { HomeAppBar } from "./commons/components/HomeAppBar";

const CustomSidebar = (props: SidebarProps) => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return isSmall ? (
    <Sidebar
      sx={{
        "&.RaSidebar-appBarCollapsed": {
          display: "none",
        },
      }}
      {...props}
    />
  ) : (
    <></>
  );
};

export const CFILayout = ({ children }: { children: ReactNode }) => {
  return (
    <RALayout sidebar={CustomSidebar} appBar={CFIAppBar}>
      <Stack
        spacing={8}
        justifyContent={"center"}
        direction={"row"}
        padding={"1.2rem"}
      >
        <Box width={"70%"}>{children}</Box>
        {/* <Card sx={{ width: "25%" }}>
          <CardContent>Aqui va un registro de actividad</CardContent>
        </Card> */}
      </Stack>

      <CheckForApplicationUpdate />
    </RALayout>
  );
};

export const RBACLayout = ({ children }: { children: ReactNode }) => {
  return (
    <RALayout sidebar={CustomSidebar} appBar={RBACAppBar}>
      <Stack
        spacing={8}
        justifyContent={"center"}
        direction={"row"}
        padding={"1.2rem"}
      >
        <Box width={"70%"}>{children}</Box>
        {/* <Card sx={{ width: "25%" }}>
          <CardContent>Aqui va un registro de actividad</CardContent>
        </Card> */}
      </Stack>

      <CheckForApplicationUpdate />
    </RALayout>
  );
};
//@ts-ignore
export const ClosedSidebar = () => (
  <Drawer variant="temporary" open={false} />
);
export const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <RALayout appBar={HomeAppBar} sidebar={ClosedSidebar}>
      <Stack
        spacing={8}
        justifyContent={"center"}
        direction={"row"}
        padding={"1.2rem"}
        
      >
        {children}
      </Stack>

      <CheckForApplicationUpdate />
    </RALayout>
  );
};
