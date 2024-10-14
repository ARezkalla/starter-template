import React from "react"

import { Box, SxProps } from "@mui/material"
import Icon from "@mui/material/Icon"

import { styles } from "./styles"

type AppIconProps = {
  iconCode: string
  sx: SxProps
}

export const AppIcon = ({ iconCode, sx }: AppIconProps) => (
  <Box sx={styles.appIcon}>
    {iconCode ? (
      <Icon sx={{ ...styles.icon, ...sx }}>{iconCode}</Icon>
    ) : (
      <Icon>question_mark</Icon>
    )}
  </Box>
)
