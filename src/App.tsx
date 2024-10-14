import { CircularProgress } from "@mui/material"
import { Suspense } from "react"
import Routes from "./routes"
import ThemeProvider from "./app/theme/ThemeProvider"

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<CircularProgress />}>
        <Routes />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
