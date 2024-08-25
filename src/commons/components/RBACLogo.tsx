import { Link } from "react-admin";
import { Typography, Stack } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppBarClasses } from "react-admin";

function RBACLogo() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={0.5}
      sx={{
        color: (theme) => theme.palette.primary.main,
      }}
    >
      <Link
        to="/rbac"
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          width: "100%",
          height: "100%",
        }}
      >
        <DashboardIcon />
        <Typography
          paddingRight={"1.2rem"}
          className={AppBarClasses.title}
          maxWidth={"250px"}
          fontWeight={500}
          variant="h6"
        >
          RBAC
        </Typography>
      </Link>
    </Stack>
  );
}

export default RBACLogo;
