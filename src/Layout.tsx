import type { ReactNode } from "react";
import {
  Layout as RALayout,
  CheckForApplicationUpdate,
  Sidebar,
  SidebarProps,
  SidebarClasses,
} from "react-admin";
import { CFIAppBar } from "./commons/components/CFIAppBar";
import { useMediaQuery, Theme, Box } from "@mui/material";

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
      {children}
      <CheckForApplicationUpdate />
    </RALayout>
  );
};
