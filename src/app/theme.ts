import { createTheme } from "@mui/material"
export const theme = createTheme(
  { typography: { fontFamily: ["Lato"].join(",") } },
  {
    palette: {
      primary: {
        main: "#00789E",
        secondary: "#E6F1F2",
        inactive: "#A6A6A6",
      },
      secondary: {
        main: "#A6A6A6",
        contrastText: "#E4E4E4",
      },
      error: {
        main: "#f44336",
      },
      background: {
        default: "#f5f5f5",
        paper: "#ffffff",
        select: "#F0F0F0",
      },
      text: {
        primary: "#353535",
        title: "#434343",
      },
      button: {
        active: "#56CCAA",
        inactive: "#C1C1C1",
      },
      arrow: {
        primary: "#5E5E5E",
      },
      menu: {
        background: "#E4E4E4",
      },
    },
  },
)
