import React, {
  PropsWithChildren, useState,
} from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { getThemeByName } from "./Themes";

export const ColorModeContext = React.createContext({
  // eslint-disable-next-line
  setColorMode: (mode: any) => {},
})

interface ThemeProviderProps {
  children: any
}

const MuiThemeProvider: React.FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
}) => {
  const storedColorMode: any = localStorage.getItem("themeMode") || "light"

  const getCustomTheme = (mode: any) => {
    const localThemeProperties = localStorage.getItem("theme")

    const appTheme = !!localThemeProperties
      ? JSON.parse(localThemeProperties)
      : getThemeByName(storedColorMode)

    appTheme.palette.mode = !mode ? "light" : mode

    return appTheme
  }

  const [mode, setMode] = useState(storedColorMode)

  const theme = React.useMemo(() => createTheme(getCustomTheme(mode)), [mode])

  const colorMode = React.useMemo(
    () => ({
      setColorMode: (colorMode: any) => {
        setMode(colorMode)
      },
    }),
    [],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default MuiThemeProvider
