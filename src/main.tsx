import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import reportWebVitals from "./reportWebVitals"
import { store } from "@store/store"
import { enableMocks } from "../src/mocks/helpers"

const ENABLE_MOCKS = true

if (ENABLE_MOCKS && process.env.NODE_ENV === "development") enableMocks()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
