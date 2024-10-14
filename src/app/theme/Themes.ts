import { Theme } from "@mui/material/styles"

import dark from "./Themes/dark"
import light from "./Themes/light"

export const themeMap: { [key: string]: any } = {
  light,
  dark,
}
export const getThemeByName = (theme: string): Theme => themeMap[theme]
export const availableThemes = [
  {
    name: "Light",
    id: "light",
  },
  {
    name: "Dark",
    id: "dark",
  },
]
