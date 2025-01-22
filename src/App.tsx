import LeftConatiner from "./Components/LeftConatiner/leftBody"
import GamePopUp from "./Components/PopUpContainer/GamePopUp"
import ProjectPopup from "./Components/PopUpContainer/ProjectPopup"
import RightContainer from "./Components/RightContainer/RightBody"

function App() {


  return (
    <div className='relative flex flex-col min-w-[320px] lg:flex-row gap-2 mt-11 md:mr-24 md:ml-24'>
      <div className="">
        <LeftConatiner />
      </div>
      <div className="flex-1">
        <RightContainer />
      </div>
      <GamePopUp />
      <ProjectPopup />
    </div>
  )
}

export default App
