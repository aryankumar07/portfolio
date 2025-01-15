import { useState } from "react";
import { headers } from "../../constants";
import RightHeader from "./RightHeader";
import AboutMeBody from "./AboutMe";
import ResumeBody from "./ResumeBody";
import ProjectBody from "./ProjectBody";
import BlogBody from "./blogbody";

const RightContainer = () => {

  const [page, setPage] = useState(0);

  const header: string = headers[page];
  let body: JSX.Element = AboutMeBody;


  if (page === 1) {
    body = ResumeBody
  } else if (page === 2) {
    body = ProjectBody
  } else if (page === 3) {
    body = BlogBody
  }

  return (
    <div className="m-3  bg-primary rounded-3xl h-[150vh]">
      <RightHeader head={header} page={page} setPage={setPage} />
      <div>
        {body}
      </div>
    </div>
  )
}

export default RightContainer;
