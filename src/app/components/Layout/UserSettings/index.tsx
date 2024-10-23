import { useContext, useEffect } from "react"

import React from "react"
import { ColorModeContext } from "../../../theme/ThemeProvider"
import { availableThemes, themeMap } from "../../../theme/Themes"

import { Box, FormControlLabel, FormGroup, Switch } from "@mui/material"

import { styles } from "./styles"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import { setThemeType } from "@store/rootSlice"
import LogoutButton from "./components/LogoutButton"


const UserSettings = () => {
  const dispatch = useAppDispatch()
  const {themeType} = useAppSelector((state) => state.global)


  const colorMode = useContext(ColorModeContext)

  React.useEffect(() => {
    colorMode.setColorMode(themeType)
    }, [themeType, colorMode])

  const stopPropagation = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
  }

  const handleThemeChange = (event: { target: { checked: boolean } }) => {
    const themeIndex = event.target.checked === true ? 1 : 0
    const themeId = availableThemes[themeIndex].id

    localStorage.setItem("themeMode", themeId)
    dispatch(setThemeType(themeId))
    colorMode.setColorMode(themeId)
  }




  return (
    <Box sx={styles.root} onClick={stopPropagation}>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          sx={styles.formControlLabel}
          value="theme"
          control={
            <Switch
              checked={themeType === "dark"}
              onChange={handleThemeChange}
              color="primary"
            />
          }
          label={"dark theme"}
          labelPlacement="start"
        />

        <FormControlLabel
          value="logout"
          sx={styles.formControlLabel}
          control={<LogoutButton />}
          label=""
        />
      </FormGroup>
    </Box>
  )
}

export default UserSettings
