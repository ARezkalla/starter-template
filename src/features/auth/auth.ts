import { logOut } from "@/app/store/rootSlice"
import { store } from "@store/store"

export const logout = async () => {
  try {
    //delete token here
    // handle logout logic
    store.dispatch(logOut())
  } catch (error) {
    return error
  }
}
