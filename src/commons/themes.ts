import { radiantDarkTheme, radiantLightTheme } from "react-admin";

export default {
  lightTheme: radiantLightTheme,
  darkTheme: radiantDarkTheme,
};

export const styles = {
  showListSx: { width: "100%", bgcolor: "transparent" },
  stackDefaults: {
    justifyContent: "flex-start",
    spacing: 4,
    sx: { paddingY: "0.6rem" },
  },
};
