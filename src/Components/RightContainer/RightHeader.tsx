import React from "react";
import { headers } from "../../constants";
import Line from "../../commons/line";

interface RightHeaderProps {
  head: string,
  isActive: number,
  setIsActive: React.Dispatch<React.SetStateAction<number>>
}


const RightHeader: React.FC<RightHeaderProps> = ({ head, isActive, setIsActive }) => {
  return (
    <div className="flex flex-row justify-between items-center relative ">
      <div className="flex flex-col gap-3 justify-start items-start text-foreground pt-10 pr-20 ml-4 text-4xl font-bold font-outfit">
        {head}
        <Line color="#ffdb70" height="5px" width="30%" />
      </div>
      <div
        className="absolute gap-5 h-[55px] right-0 top-0 flex flex-row justify-start items-end border border-[#383838] text-foreground font-bold font-outfit rounded-bl-3xl rounded-tr-3xl w-[25rem] bg-greyish">
        {
          headers.map((head, index) => {
            return (
              <div
                onClick={() => setIsActive(index)}
                key={index}
                className={`mb-4  ml-5 ${index === isActive ? 'text-highlight' : 'text-foreground'} cursor-pointer`}>
                {head}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default RightHeader;
