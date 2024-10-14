import { Box } from "@mui/material"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"

import { styles } from "./styles"

const HeaderSearchBar = () => {
  return (
    <Box sx={styles().search}>
      <Box sx={styles().iconWrapper}>
        <SearchIcon sx={styles().icon} />
      </Box>
      <InputBase
        sx={styles().inputBase}
        placeholder={"Search"}
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  )
}

export default HeaderSearchBar
