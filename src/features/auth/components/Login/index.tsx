import { Box, Paper } from "@mui/material"

import logo from "@assets/coreic.png"
import { styles } from "./styles"

import LoginForm from "./components/LoginForm"

const Login = () => {
  return (
    <Box sx={styles.root}>
      <Paper sx={styles.paperContainer} elevation={3}>
        <Box component={"img"} src={logo} sx={{ height: "120" }} />
        <LoginForm />
      </Paper>
    </Box>
  )
}

export default Login
