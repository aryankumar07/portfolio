import { useState } from "react";
import { headers } from "../../constants";
import RightHeader from "./RightHeader";
import AboutMeBody from "./AboutMe";
import ResumeBody from "./ResumeBody";
import ProjectBody from "./ProjectBody";
import BlogBody from "./blogbody";
import { UseScreenSize } from "../../hooks/useScreenSize";
import BottomBar from "./BottomBar";
import Heading from "../../commons/heading";
import Line from "../../commons/line";

const RightContainer = () => {

    const [isActive, setIsActive] = useState(0);

    const size = UseScreenSize();

    const header: string = headers[isActive];

    return (
        <div className="m-3 border border-[#383838]  bg-primary rounded-3xl lg:h-[150vh] h-auto xl:max-w-[85%] ">
            {
                size === "large" ?
                    <RightHeader head={header} isActive={isActive} setIsActive={setIsActive} /> : <BottomBar isActive={isActive} setIsActive={setIsActive} />
            }
            {
                size !== "large" ?
                    <div className="p-2">
                        <Heading value={header} size="text-5xl" />
                        <Line color="#ffdb70" width="15%" height="5px" className="mt-3" />
                    </div>
                    : null
            }
            <div>
                {isActive === 0 && AboutMeBody}
                {isActive === 1 && ResumeBody}
                {isActive === 2 && ProjectBody}
                {isActive === 3 && BlogBody}
            </div>
        </div>
    )
}

export default RightContainer;
