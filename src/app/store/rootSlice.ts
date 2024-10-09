import { createSlice } from "@reduxjs/toolkit"

export interface IInitialStateRoot {
  isUserLogged: boolean
}

const initialState: IInitialStateRoot = {
  isUserLogged: false,
}

const rootSlice = createSlice({
  name: "globals",
  initialState,
  reducers: {
    setUserIsLogged: (state, action) => {
      state.isUserLogged = action.payload
    },
  },
})

export const { setUserIsLogged } = rootSlice.actions

export default rootSlice.reducer
