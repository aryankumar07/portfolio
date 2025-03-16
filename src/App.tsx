import LeftContainer from "./components/LeftConatiner/leftBody"
import BlogPopUp from "./components/PopUpContainer/BlogPopUp"
import GamePopUp from "./components/PopUpContainer/GamePopUp"
import ProjectPopup from "./components/PopUpContainer/ProjectPopup"
import RightContainer from "./components/RightContainer/RightBody"
import { cn } from "./libs/utils"

const App = () => {
  return (
    <div className={cn(
      'relative',
      'min-w-[364px] max-w-[600px]',
      'min-[836px]:max-w-[816px]',
      'min-[1036px]:max-w-[1016px]',
      'min-[1336px]:max-w-[1316px]',
      'mx-auto min-[600px]:my-14',
      'flex',
      'flex-col min-[1336px]:flex-row',
      'justify-center gap-6 p-4',
    )}>
      <LeftContainer />
      <RightContainer />
      <GamePopUp />
      <ProjectPopup />
      <BlogPopUp />
    </div>
  )
}

export default App
