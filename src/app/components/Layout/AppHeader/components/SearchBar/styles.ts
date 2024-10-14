import { useTheme } from "@mui/material"
const DEFAULT_SPACING_FACTOR = 8

export const styles = (theme = useTheme()) => ({
  search: {
    position: "relative",
    borderRadius: "4px",
    backgroundColor: "background.default",
    marginRight: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  iconWrapper: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    right: 0,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  inputBase: {
    color: "text.secondary",
    backgroundColor: "background.default",
    fontSize: "1rem",
    fontWeight: "400",
    borderRadius: "4px",
    lineHeight: "0.875rem",
    maxHeight: 4 * DEFAULT_SPACING_FACTOR,

    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: 75 * DEFAULT_SPACING_FACTOR,
      },
    },
  },
  icon: {
    color: "text.secondary",
  },
})
