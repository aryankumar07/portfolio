import { Eye } from "lucide-react"
import { Projects, Project } from "../../constants";
import { useProjectModel } from "../../store/useProjectModel";
import { motion } from "motion/react";

const ProjectBody = () => {

  const setProject = useProjectModel((state) => state.setProject)
  const setOpen = useProjectModel((state) => state.setOpen)

  const handelClick = (value: Project) => {
    setProject(value)
    setOpen()
  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="">
        <div className="columns-1 md:columns-2 md:gap-3 lg:columns-3">
          {
            Projects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="relative mb-1 group cursor-pointer font-outfit text-foreground bg-primary break-inside-avoid hover:bg-neutral-700 transition-colors duration-150 rounded-lg p-3"
                  onClick={() => handelClick(project)}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-neutral-800 rounded-lg bg-opacity-30 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 ease-linear flex justify-center items-center z-50">
                      <Eye
                        size={30}
                        className="text-highlight z-50 rounded-lg border-neutral-400 border p-1 bg-background"
                      />
                    </div>
                    <img src={project.images[0]} className="rounded-lg border-neutral-600 border" />
                  </div>
                  <p className="mt-2 text-lg">{project.title}</p>
                  <p className="text-neutral-500 text-sm">{project.category}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </motion.div>
  )
}
export default ProjectBody; 
