import { useState } from "react"
import Button from "../../commons/button"
import Heading from "../../commons/heading"
import Line from "../../commons/line"
import { useProjectModel } from "../../store/useProjectModel"
import Popup from "./Popup"
import { ChevronLeft } from 'lucide-react'

const ProjectPopup = () => {

  const isOpen = useProjectModel((state) => state.isOpen)
  const setClose = useProjectModel((state) => state.setClose)
  const project = useProjectModel((state) => state.project)
  const [pos, setPos] = useState(0)


  if (!project) {
    return <Popup isOpen={isOpen} setClose={setClose} data={<h1>SOMETHING WENT WRONG NOT ABLE TO LOAD </h1>} big />
  }

  const NumberOfImage: number = project!.images.length;

  const nextPicture = () => {
    setPos((prev) => {
      if (prev === NumberOfImage - 1) return 0;
      return prev + 1;
    })
  }


  const prevPicture = () => {
    setPos((prev) => {
      if (prev === 0) return NumberOfImage - 1
      return prev - 1;
    })
  }


  const body = (
    <div className="">
      <ChevronLeft onClick={prevPicture} size={30} className="" />
      <ChevronLeft onClick={nextPicture} size={30} className="" />
      {
        project!.images.map((image, index) => {
          return <img
            key={index}
            src={image}
            alt="Image"
            className={`object-contain rounded-t-xl ${index == pos ? "block" : "hidden"}`}
          />
        })
      }
      <Line height="1px" />
      <div className="">
        <div className="">
          <Button
            onClick={() => window.open(project!.github, "_blank")}
            value="Github"
            className={`hover:text-highlight ${project!.github.length === 0 ? 'cursor-not-allowed' : 'cursor-pointer'} `}
          />

          <Button
            onClick={() => window.open(project!.live, "_blank")}
            value="Live"
            className={`hover:text-highlight ${project!.live.length === 0 ? 'cursor-not-allowed' : 'cursor-pointer'} `}
          />
        </div>
        <div className="">
          <Heading value={project!.title} size="" />
          <p className="font-outfit" >{project!.date}</p>
          <p className="text-justify">
            {project!.description}
          </p>
        </div>
      </div>
    </div>
  )


  return (
    <Popup isOpen={isOpen} setClose={setClose} data={body} big />
  )
}

export default ProjectPopup
