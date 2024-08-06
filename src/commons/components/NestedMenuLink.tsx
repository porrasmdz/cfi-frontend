import React, { forwardRef, ReactElement, ReactNode } from "react";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import { Link, LinkProps, useMatch, useMatches } from "react-router-dom";
import {
  MenuItem,
  ListItemIcon,
  useMediaQuery,
  Theme,
  Menu,
  MenuItemProps,
  TooltipProps,
  Box,
} from "@mui/material";
import { KeyboardArrowDown as DropdownIcon } from "@mui/icons-material";
import { MenuItemLinkProps } from "react-admin";
import { useTranslate, useBasename } from "ra-core";

export const NestedMenuItemLink = forwardRef<any, NestedMenuItemLinkProps>(
  (props, ref) => {
    const {
      className,
      primaryText,
      leftIcon,
      onClick,
      tooltipProps,
      children,
      multiTarget,
      ...rest
    } = props;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openSubMenu = Boolean(anchorEl);
    const handleNestedMenuClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      setAnchorEl(event.currentTarget);
    };
    const handleNestedMenuClose = () => {
      setAnchorEl(null);
    };
    const translate = useTranslate();
    const basename = useBasename();

    const to =
      (typeof props.to === "string" ? props.to : props.to.pathname) || "";
    const match = useMatch({ path: to, end: to === `${basename}/` });
    const matchMulti = useMatches()
    const matchingChildTarget = multiTarget?.find((target)=> {
      return matchMulti.length > 0 ? target === matchMulti[0].pathname.replace("/","") : null
    })
    const hasChildMatch = matchingChildTarget != null

    const renderMenuItem = () => {
      return !children ? (
        <StyledMenuItem
          className={clsx(className, {
            [NestedMenuItemLinkClasses.active]: !!match,
          })}
          // @ts-ignore
          component={LinkRef}
          ref={ref}
          tabIndex={0}
          {...rest}
        >
          {leftIcon && (
            <ListItemIcon className={NestedMenuItemLinkClasses.icon}>
              {leftIcon}
            </ListItemIcon>
          )}
          {typeof primaryText === "string"
            ? translate(primaryText, { _: primaryText })
            : primaryText}
        </StyledMenuItem>
      ) : (
        <>
          <StyledMenuItem
            id={`nested-menu-for-${primaryText}`}
            className={clsx(className, {
              [NestedMenuItemLinkClasses.active]: !!hasChildMatch,
            })}
            component={Box}
            aria-controls={
              openSubMenu ? `submenu-for-${primaryText}` : undefined
            }
            aria-haspopup="true"
            aria-expanded={openSubMenu ? "true" : undefined}
            //@ts-ignore
            onClick={handleNestedMenuClick}
          >
            {typeof primaryText === "string"
              ? translate(primaryText, { _: primaryText })
              : primaryText}
            
            <DropdownIcon sx={{ marginLeft: "0.2rem" }} />
          </StyledMenuItem>
          <Menu
            id={`submenu-for-${primaryText}`}
            anchorEl={anchorEl}
            open={openSubMenu}
            onClose={handleNestedMenuClose}
            MenuListProps={{
              "aria-labelledby": `nested-menu-for-${primaryText}`,
            }}
            sx={{ bgColor: "red" }}
          >
            {children.constructor.name == "Array" ? (
              //@ts-ignore
              children.map((el,index) => (
                <MenuItem
                disableGutters 
                key={`${primaryText} - ${index}`}
                onClick={handleNestedMenuClose}
                  // LinkComponent={Link}
                >
                  {el}
                </MenuItem>
              ))
            ) : (
              <MenuItem onClick={handleNestedMenuClose}>{children}</MenuItem>
            )}
          </Menu>
        </>
      );
    };

    return renderMenuItem();
  }
);

const PREFIX = "RaNestedMenuItemLink";

export const NestedMenuItemLinkClasses = {
  active: `${PREFIX}-active`,
  icon: `${PREFIX}-icon`,
};

const StyledMenuItem = styled(MenuItem, {
  name: PREFIX,
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  color: theme.palette.text.secondary,
  border: "none",
  fontFamily: "roboto",

  [`&.${NestedMenuItemLinkClasses.active}`]: {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  [`&.${NestedMenuItemLinkClasses}`]: {
    color: theme.palette.text.primary,
  },

  [`& .${NestedMenuItemLinkClasses.icon}`]: { minWidth: theme.spacing(5) },
}));

const LinkRef = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link ref={ref} {...props} />
));


export type NestedMenuItemLinkProps = Omit<
    LinkProps & MenuItemProps<'li'>,
    'placeholder' | 'onPointerEnterCapture' | 'onPointerLeaveCapture'
> & {
    leftIcon?: ReactElement;
    primaryText?: ReactNode;
    tooltipProps?: TooltipProps;
    multiTarget?: string[];
};

