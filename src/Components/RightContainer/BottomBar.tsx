import React from "react";
import { headers } from "../../constants";

interface BottomBarProps {
  isActive: number,
  setIsActive: React.Dispatch<React.SetStateAction<number>>
}

const BottomBar: React.FC<BottomBarProps> = ({ isActive, setIsActive }) => {
  return (
    <div className="flex justify-center items-center fixed w-[100vw] bg-greyish-transparent text-foreground h-[70px] bottom-0 left-0 backdrop-blur-sm rounded-t-3xl">
      <div className="flex flex-row gap-5 md:gap-10">
        {
          headers.map((head, index) => {
            return (
              <div
                onClick={() => setIsActive(index)}
                className={`md:text-xl text-sm text-bold text-outfit ${index === isActive ? 'text-highlight' : 'text-foreground'} `}>
                {head}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default BottomBar;
