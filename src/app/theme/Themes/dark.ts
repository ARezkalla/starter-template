const DEFAULT_SPACING_FACTOR = 8
const dark = {
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
    type: "dark",
    mode: "dark",
    custom: {
      graphLine: "#9BA2DC",
      normalStatus: "#1CA100",
      warningStatus: "#E38333",
      infoStatus: "#E38333",
      criticalStatus: "#B52B10",
      listItem: "#1E5FC1",
      navigationDrawerBackground: "#262626",
      iconSelected: "#fbcb40",
      iconDefault: "#fff",
      calendarDayOutOfRange: "#191919",
      calendarButtonActive: "#3e3728",
      calendarToolBarButtonColor: "#eeca70",
      calendarToday: "#3e3728",
      calendarMonthBorderColor: "#d4d4d411",

      calendarToolBarLabel: "#fff",
    },
    primary: {
      main: "#0067E0",
      light: "#E6F1FF",
      contrastText: "#fff",
      dark: "#042E2D",
    },
    info: {
      light: "#FFCB3F",
      main: "#A0C278",
    },
    success: {
      main: "#559b54",
      light50: "#559b5480",
      light30: "#559b544d",
      light10: "#559b541a",
      contrastText: "#000",
    },
    warning: {
      main: "#d08e5b",
      light50: "#d08e5b80",
      light30: "#d08e5b4d",
      light10: "#d08e5b1a",
      contrastText: "#000",
    },
    error: {
      main: "#d04646",
      light50: "#d0464680",
      light30: "#eb00004d",
      light10: "#eb00001a",
      contrastText: "#000",
    },
    offline: {
      main: "#A1A1A1",
      light10: "#a1a1a1e6",
    },
    training: { main: "#a1a1a1" },
    divider: "#e6e6e699",
    graphLines: { main: "#eeeeee99" },
    header: { main: "#252525" },
    background: {
      default: "#121212",
      paper: "#252525",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.6)",
      secondary: "#8B8C95",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    action: {
      active: "#0067E0",
      hover: "#E6F1FF",
      disabledOpacity: 0.5,
      disabledBackground: "#fff",
      selected: "#0067E0",
    },
  },
}
export default dark