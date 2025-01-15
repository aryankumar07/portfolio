import React from "react";
import { headers } from "../../constants";
import Line from "../../commons/line";

interface RightHeaderProps {
    head: string,
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}


const RightHeader: React.FC<RightHeaderProps> = ({ head, page, setPage }) => {
    return (
        <div className="flex flex-row justify-between items-center relative overflow-hidden">
            <div className="flex flex-col gap-3 justify-start items-start text-foreground pt-10 pr-20 ml-4 text-4xl font-bold font-outfit">
                {head}
                <Line color="#ffdb70" height="5px" width="30%" />
            </div>
            <div
                className="absolute right-[-20px] gap-5 h-[140px] top-[-50px] flex flex-row border justify-start items-end text-foreground font-bold font-outfit rounded-3xl w-[25rem] bg-greyish">
                {
                    headers.map((head, index) => {
                        return (
                            <div
                                onClick={() => setPage(index)}
                                key={index}
                                className={`mb-7 ml-5 ${index === page ? 'text-highlight' : 'text-foreground'} cursor-pointer`}>
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
