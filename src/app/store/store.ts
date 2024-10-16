import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { apiSlice } from "./queryApi"
import rootReducer from "./rootReducer"

const middlewares = apiSlice.middleware
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
})

setupListeners(store.dispatch)

export const createTestStore = (initialState: any) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
