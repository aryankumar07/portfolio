import React from "react";
import { headers } from "../../constants";

interface BottomBarProps {
  isActive: number,
  setIsActive: React.Dispatch<React.SetStateAction<number>>
}

const BottomBar: React.FC<BottomBarProps> = ({ isActive, setIsActive }) => {
  return (
    <div className="z-50 fixed hidden left-0 bottom-0 min-w-[364px] w-full py-4 max-[1036px]:flex justify-center items-center bg-greyish-transparent text-foreground backdrop-blur-sm rounded-t-2xl">
      <div className="flex flex-row gap-5 md:gap-10">
        {
          headers.map((head, index) => {
            return (
              <div
                key={head}
                onClick={() => setIsActive(index)}
                className={`md:text-lg text-sm font-outfit ${index === isActive ? 'text-highlight' : 'text-foreground'} `}>
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
