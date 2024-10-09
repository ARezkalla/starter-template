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
import { theme } from "@/app/theme"
import { NavLink } from "react-router-dom"
import { styles } from "./styles"
import { useAppSelector } from "@/app/store/hooks"
import AppTypography from "@components/AppTypography"

const CATEGORIES = [
  {
    category: "dashboard",
    icon: <DashboardOutlinedIcon />,
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
              key={category.idsAvailable[0]}
              to={category.idsAvailable[0]}
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
                            {category}
                          </AppTypography>
                        ) : (
                          ""
                        )
                      }
                      placement="right-start"
                      arrow
                    >
                      <ListItemIcon
                        sx={styles.listIcon}
                        iconCode={category.iconCode}
                        isActive={isActive}
                      />
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
