import * as React from "react"

import { Navigate } from "react-router-dom"
import { useAppSelector } from "@store/hooks"

interface ProtectedRouteProps {
  element: React.ReactNode
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const { isUserLogged } = useAppSelector((state) => state.global)

  return isUserLogged ? <>{element}</> : <Navigate to="/login" replace />
}
export default ProtectedRoute
