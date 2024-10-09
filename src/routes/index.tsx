import AppViewContainer from "@components/Layout"
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import Login from "@features/Login"
import Dashboard from "@features/Dashboard"

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Login />} path="/login" />
        <Route element={<AppViewContainer />}>
          <Route index element={<Navigate to="dashboard" />} />

          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
        </Route>
      </>,
    ),
  )
  return <RouterProvider router={router} />
}

export default Routes
