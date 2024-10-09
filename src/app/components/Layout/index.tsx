import { AppBar, Box, Container, CssBaseline, Toolbar } from "@mui/material"
import AppMainMenu from "./AppMainMenu"
import { styles } from "./styles"
import { Outlet } from "react-router-dom"

const AppViewContainer = () => (
  <Box sx={styles.root}>
    <CssBaseline />
    <AppBar sx={styles.appBar}>
      <Toolbar
        disableGutters
        sx={(theme) => ({
          ...styles.appBarShadow,
          ...styles.drawerClose(theme),
        })}
      />
    </AppBar>
    <Box sx={{ display: "flex", width: "auto" }}>
      <AppMainMenu />
      <Container maxWidth={false} disableGutters sx={{ mx: 2, mt: 2 }}>
        <Toolbar disableGutters />
        <Outlet />
      </Container>
    </Box>
  </Box>
)

export default AppViewContainer
