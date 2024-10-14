import React from "react"

import { styles } from "./styles"
import { AppIcon } from "./../AppIcon"

interface SelectedIconProps {
  iconCode: any
  isActive: boolean
}

const SelectedIcon = ({ iconCode, isActive }: SelectedIconProps) => (
  <AppIcon
    iconCode={iconCode}
    sx={{
      ...styles.icon,
      ...(isActive && styles.iconSelected),
    }}
  />
)

export default SelectedIcon
