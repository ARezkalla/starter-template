import { alpha, Theme } from "@mui/material/styles"
const DRAWER_WIDTH = 150

export const styles = {
  icon: {
    fill: "primary.main",
  },
  typography: {
    textWrap: "wrap",
    backgroundColor: "red",
  },
  iconSelected: {
    fill: "custom.iconSelected,",
  },
  navLink: {
    borderRadius: 8,
    textDecoration: "inherit",
    color: "inherit",
  },
  listItem: (theme: Theme) => ({
    "& .MuiListItemButton-root:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.3),
      color: theme.palette.primary.contrastText,
    },
    "& .MuiListItemButton-root": {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },

    marginLeft: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    ":first-of-type": { marginTop: 47 / 8 },
    marginBottom: 4,
    width: "auto",
  }),

  listItemSelected: (theme: Theme) => ({
    "& .MuiListItemButton-root:hover": {
      backgroundColor: alpha(theme.palette.primary.light, 0.3),
    },
    "& MuiListItemButton-root": {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    backgroundColor: "primary.main",
    color: theme.palette.getContrastText(theme.palette.primary.contrastText),
  }),
  listIcon: {
    minWidth: 0,
    marginLeft: 1,
    marginRight: 1,
  },
  listItemText: {
    textWrap: "wrap",
    textTransform: "capitalize",
  },
  drawer: {
    "& .MuiPaper-root": {
      border: 0,
      boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
      backgroundColor: "custom.navigationDrawerBackground",
    },
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
  },
  listContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  drawerOpen: (theme: Theme) => ({
    width: DRAWER_WIDTH,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  drawerClose: (theme: Theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme?.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme?.spacing(9)} + 1px)`,
    },
  }),
}
