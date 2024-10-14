import { Avatar, Box, Toolbar } from "@mui/material"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"

import { setIsSettingsOpen } from "../../../store/rootSlice"
import { styles } from "./styles"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import HeaderSearchBar from "./components/SearchBar"
import logoIC from "@assets/coreic.png"

const AppHeader = () => {
  const { isSettingsOpen } = useAppSelector((state) => state.global)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSettingsOpen = () => {
    dispatch(setIsSettingsOpen(!isSettingsOpen))
  }

  const logo = logoIC

  return (
    <Toolbar sx={styles.toolbar}>
      <Box sx={styles.container}>
        <Box
          sx={styles.icon}
          component="img"
          onClick={() => navigate("dashboard")}
          src={logo}
          alt="corebeat icon"
        />
      </Box>

      <HeaderSearchBar />
      <Avatar sx={styles.settings} onClick={handleSettingsOpen}>
        <Box sx={styles.personIcon}>
          <PersonOutlineIcon />
        </Box>
      </Avatar>
    </Toolbar>
  )
}

export default AppHeader
