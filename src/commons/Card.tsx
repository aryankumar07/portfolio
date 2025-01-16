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
                "bg-[#202022] shadow-2xl rounded-2xl p-1 md:p-2 lg:p-4 flex flex-col justify-between min-h-[110px]",
                className
            )}
        >
            <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
                <info.icon size={30} className="text-highlight col-span-1 mx-auto md:mx-0" />

                <div className="flex flex-col col-span-2">
                    <Heading value={info.heading} />
                    <div
                        className="text-foreground font-extralight font-outfit text-sm md:text-base lg:text-lg leading-6 line-clamp-3"
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
