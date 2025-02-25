import { useState } from "react"
import Button from "../../commons/button"
import Heading from "../../commons/heading"
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
    <div className="text-foreground">
      <ChevronLeft
        onClick={prevPicture}
        size={30}
        className="absolute top-[15vh] left-3 bg-neutral-600 rounded cursor-pointer hover:text-highlight "
      />
      <ChevronLeft
        onClick={nextPicture}
        size={30}
        className="absolute top-[15vh] right-3 bg-neutral-600 rounded rotate-180 cursor-pointer hover:text-highlight "
      />
      {
        project!.images.map((image, index) => {
          return <img
            key={index}
            src={image}
            alt="Image"
            className={`object-contain w-full h-64 rounded-t-xl ${index == pos ? "block" : "hidden"}`}
          />
        })
      }
      <div className="flex gap-4 pt-7">
        <div className="w-1/6 flex-shrink-0 flex flex-col gap-3 justify-start items-center">
          <Button
            onClick={() => window.open(project!.github, "_blank")}
            value="Github"
            className={`hover:text-highlight w-full ${project!.github.length === 0 ? 'cursor-not-allowed' : 'cursor-pointer'} `}
          />

          <Button
            onClick={() => window.open(project!.live, "_blank")}
            value="Live"
            className={`hover:text-highlight w-full ${project!.live.length === 0 ? 'cursor-not-allowed' : 'cursor-pointer'} `}
          />
        </div>
        <div>
          <div>
            <Heading value={project!.title} size="text-2xl" />
            <p className="font-outfit text-xs" >{project!.date}</p>
          </div>
          <p className=" mt-2">
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
