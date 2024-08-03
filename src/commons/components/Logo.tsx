import { Typography, Stack } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { AppBarClasses } from "react-admin";
function Logo() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={0.5}
      sx={{
        color: (theme) => theme.palette.primary.main,
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
        CFIv2
      </Typography>
    </Stack>
  );
}

export default Logo;
