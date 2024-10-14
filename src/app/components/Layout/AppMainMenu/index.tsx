import React from "react"
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import {
  Drawer,
  ListItem,
  ListItemButton,
  Toolbar,
  ListItemIcon,
  Tooltip,
  List,
  Box,
} from "@mui/material"
import { NavLink } from "react-router-dom"
import { styles } from "./styles"
import { useAppSelector } from "@/app/store/hooks"
import AppTypography from "@components/AppTypography"
import SelectedIcon from "./components/SelectedIcon"

const CATEGORIES = [
  {
    category: "dashboard",
    iconCode: <DashboardOutlinedIcon />,
    text: "dashboard",
  },
]

const AppMainMenu = () => {
  const { isDrawerOpen } = useAppSelector((state) => state.global)
  return (
    <Drawer
      variant="permanent"
      sx={(theme) => ({
        ...styles.drawer,
        ...(isDrawerOpen && {
          ...styles.drawerOpen(theme),
          "& .MuiDrawer-paper": styles.drawerOpen(theme),
        }),
        ...(!isDrawerOpen && {
          ...styles.drawerClose(theme),
          "& .MuiDrawer-paper": styles.drawerClose(theme),
        }),
      })}
    >
      <Toolbar />
      <Box sx={styles.listContainer}>
        <List>
          {CATEGORIES.map((category) => (
            <NavLink
              key={category.category}
              to={category.category}
              style={styles.navLink}
            >
              {({ isActive }) => (
                <ListItem
                  disableGutters
                  disablePadding
                  sx={(theme) =>
                    isActive
                      ? {
                          ...styles.listItem(theme),
                          ...styles.listItemSelected(theme),
                        }
                      : styles.listItem(theme)
                  }
                >
                  <ListItemButton disableGutters>
                    <Tooltip
                      title={
                        !isDrawerOpen ? (
                          <AppTypography capitalizeFirstLetter>
                            {category.text}
                          </AppTypography>
                        ) : (
                          ""
                        )
                      }
                      placement="right-start"
                      arrow
                    >
                      <ListItemIcon sx={styles.listIcon}>
                        <SelectedIcon
                          iconCode={category.iconCode}
                          isActive={isActive}
                        />
                      </ListItemIcon>
                    </Tooltip>
                  </ListItemButton>
                </ListItem>
              )}
            </NavLink>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default AppMainMenu
