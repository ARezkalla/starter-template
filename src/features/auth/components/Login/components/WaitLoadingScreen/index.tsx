import React from "react"
import { Box, CircularProgress, Typography } from "@mui/material"
import { styles } from "./styles"

const WaitLoadingScreen = () => {
  return (
    <Box sx={styles.container}>
      <CircularProgress size={200} />
      <Typography paragraph>Please wait</Typography>
    </Box>
  )
}

export default WaitLoadingScreen
