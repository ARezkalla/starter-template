import React from "react"

import IconButton from "@mui/material/IconButton"
import { InputAdornment } from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

interface IShowPasswordIcon {
  onClick: any
  showPassword: any
}

const ShowPasswordIcon = ({ onClick, showPassword }: IShowPasswordIcon) => (
  <InputAdornment position="end">
    <IconButton
      size="small"
      aria-label="toggle password visibility"
      onClick={() => onClick()}
    >
      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </IconButton>
  </InputAdornment>
)

export default ShowPasswordIcon
