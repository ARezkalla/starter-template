import { darken, lighten, Theme } from "@mui/material"

export const styles = {
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "background.default",
  },
  paperContainer: {
    alignSelf: "center",
    width: "534px",
    height: "534px",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 3,
    backgroundColor: "background.paper",
  },
  emailField: {
    marginBottom: 5,
  },
  textFieldLabel: {
    color: "text.primary",
  },

  formContainer: {
    display: "flex",
    marginBottom: 4,
    flexDirection: "column",
  },
  forgotPasswordRow: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginTop: 2,
    justifyContent: "space-between",
    marginBottom: 2,
  },
  rememberMe: { display: "flex", alignItems: "center" },
  rememberMeToggle: {
    color: "primary.main",
  },
  forgotPasswordBtn: { height: 4, visibility: "hidden" },
  button: {
    border: "solid",
    borderColor: "red",
  },
  inputField: {
    backgroundColor: "red",
    borderRadius: "4px 4px 0px 0px",
  },

  loginButton: (theme: Theme) => ({
    "&:hover": {
      backgroundColor: lighten(theme.palette.primary.main, 0.5),
    },
    mt: 3,
    justifyContent: "flex-start",
    color: theme.palette.getContrastText(theme.palette.primary.main),
    textTransform: "capitalize",
  }),
  circle: (theme: Theme) => ({
    marginLeft: 2,
    display: "flex",
    justifyContent: "center",
    color: darken(theme.palette.primary.main, 0.5),
  }),
  copyright: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
}
