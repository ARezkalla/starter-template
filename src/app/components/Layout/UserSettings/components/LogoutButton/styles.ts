import { Theme, lighten } from "@mui/material"

export const styles = {
  button: (theme: Theme) => ({
    color: theme.palette.getContrastText(theme.palette.primary.main),
    "&:hover": {
      backgroundColor: lighten(theme.palette.primary.main, 0.5),
    },
  }),
}
