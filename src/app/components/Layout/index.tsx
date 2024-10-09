import { Box, Container, CssBaseline } from "@mui/material"
import AppMainMenu from "./AppMainMenu"
import { styles } from "./styles"
import { Outlet } from "react-router-dom"

const AppViewContainer = () => (
  <Box sx={styles.box}>
    <CssBaseline />
    <Box sx={{ display: "flex", width: "auto" }}>
      <AppMainMenu />
      <Container maxWidth={false} disableGutters sx={styles.container}>
        <Outlet />
      </Container>
    </Box>
  </Box>
)

export default AppViewContainer
