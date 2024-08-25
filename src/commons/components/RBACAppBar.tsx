import { FC } from "react";
import { styled } from "@mui/material/styles";
import { memo } from "react";

import {
  AppBar as MuiAppBar,
  Toolbar,
  useMediaQuery,
  Box,
  Theme,
} from "@mui/material";
import RBACLogo from "./RBACLogo";
import CFINavbarMenu from "./CFINavbarMenu";
import { useLocales } from "ra-core";
import {
  SidebarToggleButton,
  LoadingIndicator,
  HideOnScroll,
  LocalesMenuButton,
  ToggleThemeButton,
  UserMenu,
  useThemesContext,
  AppBarProps,
} from "react-admin";

export const RBACAppBar: FC<AppBarProps> = memo((props) => {
  const {
    alwaysOn,
    children,
    className,
    color = "secondary",
    toolbar = defaultToolbarElement,
    userMenu = DefaultUserMenu,
    container: Container = alwaysOn ? "div" : HideOnScroll,
    ...rest
  } = props;

  const isXSmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Container className={className}>
      <StyledAppBar className={AppBarClasses.appBar} color={color} {...rest}>
        <Toolbar
          disableGutters
          variant={isXSmall ? "regular" : "dense"}
          className={AppBarClasses.toolbar}
        >
          <SidebarToggleButton className={AppBarClasses.menuButton} />
          <RBACLogo />
          <CFINavbarMenu/>
          <Box flex={1} />

          {children}

          {toolbar}
          {typeof userMenu === "boolean" ? (
            userMenu === true ? (
              <UserMenu />
            ) : null
          ) : (
            userMenu
          )}
        </Toolbar>
      </StyledAppBar>
    </Container>
  );
});

const DefaultToolbar = () => {
  const locales = useLocales();
  const { darkTheme } = useThemesContext();
  return (
    <>
      {locales && locales.length > 1 ? <LocalesMenuButton /> : null}
      {darkTheme && <ToggleThemeButton />}
      <LoadingIndicator />
    </>
  );
};

const defaultToolbarElement = <DefaultToolbar />;

const DefaultUserMenu = <UserMenu />;


const PREFIX = "RaAppBar";

export const AppBarClasses = {
  appBar: `${PREFIX}-appBar`,
  toolbar: `${PREFIX}-toolbar`,
  menuButton: `${PREFIX}-menuButton`,
  menuButtonIconClosed: `${PREFIX}-menuButtonIconClosed`,
  menuButtonIconOpen: `${PREFIX}-menuButtonIconOpen`,
  title: `${PREFIX}-title`,
};

const StyledAppBar = styled(MuiAppBar, {
  name: PREFIX,
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  [`& .${AppBarClasses.toolbar}`]: {
    padding: `0 ${theme.spacing(1)}`,
    [theme.breakpoints.down("md")]: {
      minHeight: theme.spacing(6),
    },
  },
  [`& .${AppBarClasses.menuButton}`]: {
    marginRight: "0.2em",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  [`& .${AppBarClasses.title}`]: {},

  [`&.RaMenuItemLink-active`]: {
    borderLeft: "none",
  },
  ["& .RaMenuItemLink-icon"]: {
    color: "#EFC44F",
  },
}));
