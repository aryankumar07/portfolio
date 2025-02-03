import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App.tsx'
import BattleField from "./battleField.tsx";


const router = createBrowserRouter(
  [
    {
      path: "/battleField",
      element: <App />
    },
    {
      path: "/",
      element: <BattleField />
    }
  ]
)


export default router
