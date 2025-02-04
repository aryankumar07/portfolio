import React from "react";
import { CardDetail } from "../constants";
import { cn } from "../libs/utils";
import Heading from "./heading";

interface CardProps {
  info: CardDetail;
  className?: string;
}

const Card: React.FC<CardProps> = ({ info, className = "" }) => {
  return (
    <div
      className={cn(
        "bg-[#202022] border border-neutral-600 rounded-xl p-7 flex flex-col justify-between h-full",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <div>
          <info.icon size={30} className="text-highlight mx-0" />
        </div>

        <div className="flex flex-col pt-2">
          <Heading value={info.heading} />
          <div
            className="text-foreground font-outfit text-[15px] leading-6 line-clamp-3"
            title={info.description} // Tooltip for truncated text
          >
            {info.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
