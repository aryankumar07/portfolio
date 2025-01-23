import Heading from "../../commons/heading";
import { Eye } from "lucide-react"
import { Projects, Project } from "../../constants";
import { useProjectModel } from "../../store/useProjectModel";

const ProjectBody = () => {

    const setProject = useProjectModel((state) => state.setProject)
    const setOpen = useProjectModel((state) => state.setOpen)

    const handelClick = (value: Project) => {
        setProject(value)
        setOpen()
    }


    return (
        <div className="p-8  ">
            <div className="columns-1 md:columns-2 md:gap-3 lg:columns-3">
                {
                    Projects.map((project) => {
                        return (
                            <div key={project.id} className="m-3 relative rounded-3xl bg-primary break-inside-avoid group overflow-hidden ">
                                <Eye
                                    onClick={() => handelClick(project)}
                                    size={30}
                                    className="absolute text-highlight p-1 bg-greyish rounded-md top-[25%] left-[45%] hidden group-hover:block group-hover:z-30 cursor-pointer rounded-3xl" />
                                <img src={project.images[0]} className="w-full rounded-xl group-hover:scale-105 transition-all duration-300" />
                                <Heading value={project.title} customClass="ml-2 mt-2 " size="text-lg" font="font-bold font-outfit" />
                                <Heading value={project.category} customClass="ml-2 " size="text-sm" font="font-thin font-outfit" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ProjectBody; 
