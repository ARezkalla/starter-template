const DEFAULT_SPACING_FACTOR = 8

const light = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 2690,
    },
  },
  spacing: DEFAULT_SPACING_FACTOR,
  typography: {
    fontFamily: "Roboto",
    fontSize: 14,
    h1: { fontSize: "1.5rem", fontWeight: 300, fontFamily: "Roboto" },
    h2: {
      fontSize: "1.25rem",
      fontWeight: 600,
      fontFamily: "Roboto",
      letterSpacing: "0.025rem",
    },
    h3: {
      fontSize: "1.125rem",
      fontWeight: 600,
      fontFamily: "Roboto",
      letterSpacing: "0.022em",
    },
    h4: {
      fontSize: "1.125rem",
      fontWeight: 500,
      fontFamily: "Roboto",
      letterSpacing: "0.022em",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 400,
      fontFamily: "Roboto",
      lineHeight: "1.125rem",
      letterSpacing: "0.02rem",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
      fontFamily: "Roboto",
      letterSpacing: "0.002em",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.017rem",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.017rem",
    },
    subtitle3: {
      fontWeight: 400,
      fontSize: "0.8125rem",
      lineHeight: "normal",
      letterSpacing: "0.015rem",
    },
    body1: {
      fontWeight: 400,
      fontSize: "0.938rem",
      lineHeight: 1.5,
      letterSpacing: "0.015rem",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.43,
      letterSpacing: "0.015rem",
    },
    button: {
      fontWeight: 700,
      textTransform: "capitalize",
      fontSize: "1rem",
      letterSpacing: "0.005rem",
      display: "block",
    },

    caption: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.015rem",
    },
    overline: {
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      textTransform: "uppercase",
      letterSpacing: "0.25rem",
    },
  },

  palette: {
    type: "light",
    mode: "light",

    custom: {
      graphLine: "#9BA2DC",
      normalStatus: "#1CA100",
      warningStatus: "#E38333",
      infoStatus: "#E38333",
      criticalStatus: "#B52B10",
      listItem: "#1E5FC1",
      navigationDrawerBackground: "#fcfcfc",
      iconSelected: "#fff",
      iconDefault: "#262626",
      calendarDayOutOfRange: "#eaecf8",
      calendarButtonActive: "#d09e84",
      calendarToolBarButtonColor: "#000",
      calendarToday: "#d09e84",
      calendarMonthBorderColor: "#d4d4d4",
      calendarToolBar: "#000",
      machineFilter: "#F4F5F8",
    },
    primary: {
      main: "#0067E0",
      light: "#E6F1FF",
      contrastText: "#000",
      dark: "#042E2D",
    },
    info: {
      light: "#FFCB3F",
      main: "#A0C278",
    },
    success: {
      main: "#55AB68",
      light50: "#55ab6880",
      light30: "#55ab684d",
      light10: "#55ab681a",
      contrastText: "#fff",
    },
    warning: {
      main: "#ED883D",
      light50: "#ed883d80",
      light30: "#ed883d4d",
      light10: "#ed883d1a",
      contrastText: "#fff",
    },
    error: {
      main: "#EB0000",
      light50: "#eb000080",
      light30: "#eb00004d",
      light10: "#eb00001a",
      contrastText: "#fff",
    },
    offline: {
      main: "#505155",
      light10: "#5051551a",
    },
    training: { main: "#505155" },
    divider: "#E6E6E6",
    graphLines: { main: "#EEEEEE" },
    header: { main: "#FCFCFC" },
    background: {
      default: "#F4F5F8",
      paper: "#fff",
    },
    text: {
      primary: "#373A44",
      secondary: "#8B8C95",
      disabled: "rgba(0, 0, 0, 0.3)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    action: {
      active: "#0067E0",
      hover: "#E6F1FF",
      disabledBackground: "#fff",
      disabledOpacity: 0.5,
      selected: "#0067E0",
    },
  },
}
export default light
