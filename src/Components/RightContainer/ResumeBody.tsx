import Heading from "../../commons/heading";
import IconsTag from "../../commons/Iconstag";
import { Dot, BookOpen } from "lucide-react"

const ResumeBody = (
  <div className="">
    <div className="mt-6 h-auto lg:w-full">

      <div className="flex flex-row justify-start items-center gap-6 p-3">
        <IconsTag icontag={BookOpen} />
        <Heading value="Education" size="text-3xl" />
      </div>
      <div className="h-36 p-3 flex flex-row justify-start items-start">
        <Dot size={50} className="text-highlight" />
        <div className="h-32 w-full flex flex-col pt-2">
          <Heading value="Punjab Convent School" font="font-thin font-outfit" />
          <Heading value="2020" font="font-thin font-outfit" size="text-sm" customClass="text-highlight" />
          <p className="text-foreground" >
            Situated near Moga ( BhagaPurana ) . Completed My 12th standarad with <span className="text-highlight" >90%</span> in boards. Thought didn't went to the School it was a dummy School
          </p>
        </div>
      </div>
      <div className="h-36 p-3 flex flex-row justify-start items-start">
        <Dot size={50} className="text-highlight" />
        <div className="h-32 w-full flex flex-col pt-2">
          <Heading value="Indian Institute Of Information Technology Kota" font="font-thin font-outfit" />
          <Heading value="2021 - 2025" font="font-thin font-outfit" size="text-sm" customClass="text-highlight" />
          <p className="text-foreground" >
            Currently at my last Semester pursuing B.Tech in Electronic And Communication Engineering with <span>8.59</span> CGPA. Trying to pursue my carrer in Software Engineering
          </p>
        </div>
      </div>
    </div>

    <div className="mt-6 h-auto lg:w-full">

      <div className="flex flex-row justify-start items-center gap-6 p-3">
        <IconsTag icontag={BookOpen} />
        <Heading value="Experience" size="text-3xl" />
      </div>

      <div className="h-36 p-3 flex flex-row justify-start items-start">
        <Dot size={50} className="text-highlight" />
        <div className="h-32 w-full flex flex-col pt-2">
          <Heading value="Still Finding" font="font-thin font-outfit" />
          <Heading value="..............." font="font-thin font-outfit" size="text-sm" customClass="text-highlight" />
        </div>
      </div>
    </div>
  </div>


)

export default ResumeBody;
