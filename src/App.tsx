import { CircularProgress } from "@mui/material"
import React, { Suspense } from "react"
import Routes from "./routes"

function App() {
  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <Routes />
      </Suspense>
    </>
  )
}

export default App
