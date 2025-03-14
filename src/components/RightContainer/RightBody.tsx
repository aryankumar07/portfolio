import { useState } from "react";
import { headers } from "../../constants";
import AboutMeBody from "./AboutMe";
import ResumeBody from "./ResumeBody";
import ProjectBody from "./ProjectBody";
import BlogBody from "./blogbody";
import BottomBar from "./BottomBar";
import RightHeader from "./RightHeader";

const RightContainer = () => {
  const [isActive, setIsActive] = useState(0);

  const bodyComponents = [<AboutMeBody />, <ResumeBody />, <ProjectBody />, <BlogBody />];

  return (
    <div className="border border-[#383838] min-w-[18rem] bg-primary rounded-2xl relative p-9">
      <RightHeader isActive={isActive} />

      <div className="absolute hidden right-0 top-0 min-[1036px]:flex flex-row justify-start items-end border-l border-b border-[#383838] text-foreground font-outfit rounded-bl-2xl rounded-tr-2xl bg-greyish">
        {headers.map((head, index) => (
          <button
            key={index}
            onClick={() => setIsActive(index)}
            className={`${index === isActive ? 'text-highlight' : 'text-foreground'} hover:text-lightgrey px-6 py-4 cursor-pointer`}
          >
            {head}
          </button>
        ))}
      </div>

      <BottomBar isActive={isActive} setIsActive={setIsActive} />

      <div className="pt-5">{bodyComponents[isActive]}</div>
    </div>
  );
};

export default RightContainer;
