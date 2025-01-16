import LeftConatiner from "./Components/LeftConatiner/leftBody"
import RightContainer from "./Components/RightContainer/RightBody"

function App() {

  return (
    <div className='flex flex-col lg:flex-row gap-2 mt-11 mr-24 ml-24 h-[150vh] '>
      <div className="basis-1/4">
        <LeftConatiner />
      </div>
      <div className="basis-3/4 ">
        <RightContainer />
      </div>
    </div>
  )
}

export default App
