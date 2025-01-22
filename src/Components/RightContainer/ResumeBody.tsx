import { BiLogoFlutter, BiLogoJavascript, BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import Heading from "../../commons/heading";
import IconsTag from "../../commons/Iconstag";
import { Dot, BookOpen } from "lucide-react"
import { SiDart, SiExpress, SiLua, SiNeovim, SiNodedotjs, SiPrisma, SiXcode } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";

const ResumeBody = () => {
  return (
    <div className="p-5 overflow-x-hidden">
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


      <Heading value="My Skills" size="text-3xl" customClass="mt-8 mb-8" />

      <div className="flex w-[700px] overflow-hidden group no-scrollbar">
        <div className="flex gap-16 animate-loop-scroll text-slate-300 group-hover:paused">
          <BiLogoJavascript size={90} className="hover:text-highlight flex-shrink-0" />
          <BiLogoTypescript size={90} className="hover:text-highlight flex-shrink-0" />
          <SiExpress size={90} className="hover:text-highlight flex-shrink-0" />
          <SiNodedotjs size={90} className="hover:text-highlight flex-shrink-0" />
          <RiTailwindCssFill size={90} className="hover:text-highlight flex-shrink-0" />
          <BiLogoMongodb size={90} className="hover:text-highlight flex-shrink-0" />
          <SiPrisma size={90} className="hover:text-highlight flex-shrink-0 mr-16" />
        </div>
        <div className="flex gap-16 animate-loop-scroll text-slate-300 group-hover:paused">
          <BiLogoJavascript size={90} className="hover:text-highlight flex-shrink-0" />
          <BiLogoTypescript size={90} className="hover:text-highlight flex-shrink-0" />
          <SiExpress size={90} className="hover:text-highlight flex-shrink-0" />
          <SiNodedotjs size={90} className="hover:text-highlight flex-shrink-0" />
          <RiTailwindCssFill size={90} className="hover:text-highlight flex-shrink-0" />
          <BiLogoMongodb size={90} className="hover:text-highlight flex-shrink-0" />
          <SiPrisma size={90} className="hover:text-highlight flex-shrink-0 mr-16" />
        </div>
      </div>


      <div className="flex flex-row-reverse w-[700px] overflow-hidden mt-16 group no-scrollbar">
        <div className="flex gap-16 animate-loop-scroll-opposite text-slate-300 group-hover:paused">
          <BiLogoFlutter size={90} className="hover:text-highlight flex-shrink-0" />
          <SiDart size={90} className="hover:text-highlight flex-shrink-0" />
          <TbBrandCpp size={90} className="hover:text-highlight flex-shrink-0" />
          <SiLua size={90} className="hover:text-highlight flex-shrink-0" />
          <SiNeovim size={90} className="hover:text-highlight flex-shrink-0" />
          <SiXcode size={90} className="hover:text-highlight flex-shrink-0 mr-16" />
        </div>
        <div className="flex gap-16 animate-loop-scroll-opposite text-slate-300 group-hover:paused">
          <BiLogoFlutter size={90} className="hover:text-highlight flex-shrink-0" />
          <SiDart size={90} className="hover:text-highlight flex-shrink-0" />
          <TbBrandCpp size={90} className="hover:text-highlight flex-shrink-0" />
          <SiLua size={90} className="hover:text-highlight flex-shrink-0" />
          <SiNeovim size={90} className="hover:text-highlight flex-shrink-0" />
          <SiXcode size={90} className="hover:text-highlight flex-shrink-0 mr-16" />
        </div>
      </div>
    </div>
  )
}

export default ResumeBody;
