import { createSlice } from "@reduxjs/toolkit"

export interface IInitialStateRoot {
  isUserLogged: boolean
  isDrawerOpen: boolean
}

const initialState: IInitialStateRoot = {
  isUserLogged: true,
  isDrawerOpen: false,
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
  },
})

export const { setUserIsLogged, setIsDrawerOpen } = rootSlice.actions

export default rootSlice.reducer
