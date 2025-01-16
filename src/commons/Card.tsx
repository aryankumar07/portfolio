import React from "react";
import { CardDetail } from "../constants";
import { cn } from "../libs/utils";
import Heading from "./heading";

interface CardProps {
  info: CardDetail
  className?: "string"
}


const Card: React.FC<CardProps> = ({ info, className }) => {
  return (
    <div className={cn("bg-[#202022] w-[48%] h-auto shadow-2xl rounded-2xl", className)}>
      <div className="grid grid-cols-3">
        <info.icon size={50} className="text-highlight col-span-1 justify-center mt-10 ml-12" />
        <div className="flex flex-col mt-5 justify-start  items-start col-span-2 h-[110px] ">
          <Heading value={info.heading} />
          <div className="text-foreground font-extralight font-outfit text-[1.1rem] leading-6 ">
            {
              info.description
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;

