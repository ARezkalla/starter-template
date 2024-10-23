import { createSlice } from "@reduxjs/toolkit"

export interface IInitialStateRoot {
  isUserLogged: boolean
  isDrawerOpen: boolean
  isSettingsOpen: boolean
  themeType: string
}

const getThemeFromLocalStorage = async () => {
      const theme = await localStorage.getItem("themeMode")
      return theme ? theme : "light"
}


const initialState: IInitialStateRoot = {
  isUserLogged: false,
  isDrawerOpen: false,
  isSettingsOpen: false,
  themeType: getThemeFromLocalStorage(),
}

const rootSlice = createSlice({
  name: "globals",
  initialState,
  reducers: {
    setUserIsLogged: (state, action) => {
      state.isUserLogged = action.payload
    },
    setIsDrawerOpen: (state, action) => {
      state.isDrawerOpen = action.payload
    },
    setIsSettingsOpen: (state, action) => {
      state.isSettingsOpen = action.payload
    },
    setThemeType: (state, action) => {
      state.themeType = action.payload
    },
    logOut: () => {
      localStorage.removeItem("persist:root")
      return initialState
    },
  },
})

export const {
  setUserIsLogged,
  setIsDrawerOpen,
  setIsSettingsOpen,
  setThemeType,
  logOut,
} = rootSlice.actions

export default rootSlice.reducer
