import React from "react"

import { setIsSettingsOpen } from "@store/rootSlice"

import { Box, Drawer } from "@mui/material"

import { styles } from "./styles"
import { useAppDispatch, useAppSelector } from "@store/hooks"

interface IAppDrawerSettings {
  children: React.ReactNode
}

const UserDrawerSettings = (props: IAppDrawerSettings) => {
  const { isSettingsOpen } = useAppSelector((state) => state.global)
  const dispatch = useAppDispatch()

  const handleDrawerClose =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        "type" in event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      dispatch(setIsSettingsOpen(false))
    }

  return (
    <Drawer
      anchor="right"
      open={isSettingsOpen}
      variant="temporary"
      onClose={handleDrawerClose()}
    >
      <Box
        sx={styles.drawerContainer}
        role="presentation"
        onClick={handleDrawerClose()}
        onKeyDown={handleDrawerClose()}
      >
        {props.children}
      </Box>
    </Drawer>
  )
}

export default UserDrawerSettings
