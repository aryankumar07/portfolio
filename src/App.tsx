import LeftConatiner from "./Components/LeftConatiner/leftBody"
import GamePopUp from "./Components/PopUpContainer/GamePopUp"
import RightContainer from "./Components/RightContainer/RightBody"

function App() {


  return (
    <div className='relative flex flex-col min-w-[320px] lg:flex-row gap-2 mt-11 md:mr-24 md:ml-24 h-[150vh] overflow-x-hidden'>
      <div className="basis-1/4">
        <LeftConatiner />
      </div>
      <div className="basis-3/4 ">
        <RightContainer />
      </div>
      <GamePopUp />
    </div>
  )
}

export default App
