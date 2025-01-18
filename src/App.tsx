import LeftConatiner from "./Components/LeftConatiner/leftBody"
import Popup from "./Components/PopUpContainer/Popup"
import RightContainer from "./Components/RightContainer/RightBody"

function App() {


  return (
    <div className='relative flex flex-col lg:flex-row gap-2 mt-11 md:mr-24 md:ml-24 hi[150vh] '>
      <div className="basis-1/4">
        <LeftConatiner />
      </div>
      <div className="basis-3/4 ">
        <RightContainer />
      </div>
      <Popup isOpen={false} />
    </div>
  )
}

export default App
