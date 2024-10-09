import React from "react"
// import Copyright from "core/components/Copyright"

import { Box, Divider, Paper } from "@mui/material"

// import ErrorMessage from "./subcomponents/ErrorMessage"
// import Logo from "./subcomponents/Logo"
import { styles } from "./styles"

import LoginForm from "./components/LoginForm"

const Login = () => {
  return (
    <Box sx={styles.root}>
      <Paper sx={styles.paperContainer} elevation={3}>
        {/* <ErrorMessage /> */}
        {/* <Logo /> */}
        <LoginForm />
        <Divider />
        <Box sx={styles.copyright}>{/* <Copyright /> */}</Box>
      </Paper>
    </Box>
  )
}

export default Login
