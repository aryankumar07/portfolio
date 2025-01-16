import { useState } from "react";
import { headers } from "../../constants";
import RightHeader from "./RightHeader";
import AboutMeBody from "./AboutMe";
import ResumeBody from "./ResumeBody";
import ProjectBody from "./ProjectBody";
import BlogBody from "./blogbody";

const RightContainer = () => {

  const [isActive, setIsActive] = useState(0);

  const header: string = headers[isActive];

  return (
    <div className="m-3 border border-[#383838]  bg-primary rounded-3xl h-[150vh]">
      <RightHeader head={header} isActive={isActive} setIsActive={setIsActive} />
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
