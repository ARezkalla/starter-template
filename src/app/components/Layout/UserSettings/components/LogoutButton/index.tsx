import React from "react"
import { logout } from "@features/auth/auth"

import { Button } from "@mui/material"

import { styles } from "./styles"

const LogoutButton = () => {
  const [isDisabled, setIsDisabled] = React.useState(false)

  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsDisabled(true)
    await logout()
  }

  return (
    <Button
      sx={(theme) => styles.button(theme)}
      disabled={isDisabled}
      variant="contained"
      fullWidth
      onClick={handleOnClick}
    >
      {"logout"}
    </Button>
  )
}

export default LogoutButton
