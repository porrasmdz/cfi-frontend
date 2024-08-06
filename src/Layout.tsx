import type { ReactNode } from "react";
import {
  Layout as RALayout,
  CheckForApplicationUpdate,
  Sidebar,
  SidebarProps,
} from "react-admin";
import { CFIAppBar } from "./commons/components/CFIAppBar";
import {
  useMediaQuery,
  Theme,
  Stack,
  Box,
  Card,
  CardContent,
} from "@mui/material";

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

export const Layout = ({ children }: { children: ReactNode }) => {
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
