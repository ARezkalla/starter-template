const DEFAULT_SPACING_FACTOR = 8
const DRAWER_WIDTH = 150
import { Theme } from "@mui/material"

export const styles = {
  root: {
    display: "flex",
  },
  appBar: {
    boxShadow: "none",
    zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
    backgroundColor: "primary.light",
  },
  appBarShadow: {
    height: 7 * DEFAULT_SPACING_FACTOR,
    position: "absolute",
    top: 0,
    right: 0,
    boxShadow: "4px 4px 4px rgb(0 0 0 / 25%)",
  },
  drawerOpen: (theme: Theme) => ({
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    pl: 0,
    transition: theme?.transitions?.create(["width", "padding-left"], {
      easing: theme?.transitions?.easing.sharp,
      duration: theme?.transitions?.duration.enteringScreen,
    }),
  }),
  drawerClose: (theme: Theme) => ({
    pl: 2,
    width: `calc(100% - ${theme?.spacing(7)} + 1px)`,
    transition: theme?.transitions?.create(["width", "padding-left"], {
      easing: theme?.transitions?.easing.sharp,
      duration: theme?.transitions?.duration.leavingScreen,
    }),
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${theme?.spacing(9)} + 1px)`,
    },
  }),
}
