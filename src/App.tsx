import LeftConatiner from "./Components/LeftConatiner/leftBody"
import RightContainer from "./Components/RightContainer/RightBody"
import { UseScreenSize } from "./hooks/useScreenSize"

function App() {

  const size = UseScreenSize();
  console.log(size)

  return (
    <div className='flex flex-col lg:flex-row gap-2 mt-11 md:mr-24 md:ml-24 hi[150vh] '>
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
