import { Action, CombinedState, combineReducers } from "@reduxjs/toolkit"
import rootSlice, { IInitialStateRoot } from "./rootSlice"
import { apiSlice } from "./queryApi"

type AppState =
  | CombinedState<{
      global: IInitialStateRoot
      [apiSlice.reducerPath]: ReturnType<typeof apiSlice.reducer>
    }>
  | undefined

export const appReducer = combineReducers({
  global: rootSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
})

const rootReducer = (state: AppState, action: Action) => {
  if (action.type === "RESET_REDUX") state = undefined
  return appReducer(state, action)
}
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
