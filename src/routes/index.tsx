import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App.tsx'
import BattleField from "./battleField.tsx";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/battlefield",
      element: <BattleField />
    }
  ]
)


export default router
