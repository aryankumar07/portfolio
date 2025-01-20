import { BiLogoFlutter, BiLogoJavascript, BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import Heading from "../../commons/heading";
import IconsTag from "../../commons/Iconstag";
import { Dot, BookOpen } from "lucide-react"
import { SiDart, SiExpress, SiNodedotjs, SiPrisma } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";

const ResumeBody = (
  <div className="p-5">
    <div className="mt-6 lg:w-full">
      <div className="flex flex-row justify-start items-center gap-6 p-3">
        <IconsTag icontag={BookOpen} />
        <Heading value="Education" size="text-3xl" />
      </div>
      <div className="p-3 flex flex-row justify-start items-start">
        <Dot size={50} className="text-highlight" />
        <div className="w-full flex flex-col pt-2">
          <Heading value="Punjab Convent School" font="font-thin font-outfit" />
          <Heading value="2020" font="font-thin font-outfit" size="text-sm" customClass="text-highlight" />
          <p className="text-foreground" >
            Situated near Moga ( BhagaPurana ) . Completed My 12th standarad with <span className="text-highlight" >90%</span> in boards. Thought didn't went to the School it was a dummy School
          </p>
        </div>
      </div>
      <div className="p-3 flex flex-row justify-start items-start">
        <Dot size={50} className="text-highlight" />
        <div className="w-full flex flex-col pt-2">
          <Heading value="Indian Institute Of Information Technology Kota" font="font-thin font-outfit" />
          <Heading value="2021 - 2025" font="font-thin font-outfit" size="text-sm" customClass="text-highlight" />
          <p className="text-foreground" >
            Currently at my last Semester pursuing B.Tech in Electronic And Communication Engineering with <span className="text-highlight">8.59</span> CGPA. Trying to pursue my carrer in Software Engineering
          </p>
        </div>
      </div>
    </div>

    <div className="mt-6 h-auto lg:w-full">
      <div className="flex flex-row justify-start items-center gap-6 p-3">
        <IconsTag icontag={BookOpen} />
        <Heading value="Experience" size="text-3xl" />
      </div>
      <div className="p-3 flex flex-row justify-start items-start">
        <Dot size={50} className="text-highlight" />
        <div className="w-full flex flex-col pt-2">
          <Heading value="Still Searching" font="font-thin font-outfit" />
          <Heading value="..............." font="font-thin font-outfit" size="text-sm" customClass="text-highlight" />
        </div>
      </div>
    </div>


    <Heading value="My Skills" size="text-3xl" customClass="mt-8" />

    <div className="flex flex-row flex-wrap gap-16 text-slate-600 mt-8">
      <BiLogoJavascript size={90} className="hover:text-highlight" />
      <BiLogoTypescript size={90} className="hover:text-highlight" />
      <SiExpress size={90} className="hover:text-highlight" />
      <SiNodedotjs size={90} className="hover:text-highlight" />
      <RiTailwindCssFill size={90} className="hover:text-highlight" />
      <BiLogoMongodb size={90} className="hover:text-highlight" />
      <SiPrisma size={90} className="hover:text-highlight" />
      <BiLogoFlutter size={90} className="hover:text-highlight" />
      <SiDart size={90} className="hover:text-highlight" />
      <TbBrandCpp size={90} className="hover:text-highlight" />
    </div>



  </div>
)

export default ResumeBody;
