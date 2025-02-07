import { BiLogoFlutter, BiLogoJavascript, BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import Heading from "../../commons/heading";
import IconsTag from "../../commons/Iconstag";
import { Dot, BookOpen, DownloadIcon } from "lucide-react"
import { SiDart, SiExpress, SiLua, SiNeovim, SiNodedotjs, SiPrisma, SiXcode, SiGnubash } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "motion/react";

const ResumeBody = () => {
  return (
    <>
      <button
        className="absolute right-4 p-3 hover:bg-neutral-700 group duration-150 transition-colors cursor-pointer rounded-md"
        onClick={() => window.open("https://drive.google.com/file/d/195oi7jOpksM4t-or1fdmRYPV8wGwJAW8/view?usp=sharing", "_blank")}
      >
        <DownloadIcon size={20} className="text-foreground group-hover:text-highlight " />
      </button >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <div>
            <div className="inline-flex gap-4">
              <IconsTag icontag={BookOpen} />
              <Heading value="Education" size="text-xl md:text-2xl" />
            </div>
            <div className="mb-8 flex gap-4">
              <Dot size={50} className="text-highlight flex-shrink-0 -mx-1" />
              <div className="flex flex-col gap-2 ">
                <Heading value="Indian Institute of Information Technology, Kota (IIITK)" font="font-outfit" />
                <span className="text-sm text-highlight font-outfit">2021 - 2025</span>
                <span className="text-foreground font-outfit" >
                  Currently at final year pursuing B.Tech in Electronic And Communication Engineering with <span className="text-highlight">8.59</span> CGPA. Trying to pursue my carrer in Software Engineering
                </span>
              </div>
            </div>

            <div className="mb-8 flex gap-4">
              <Dot size={50} className="text-highlight flex-shrink-0 -mx-1" />
              <div className="flex flex-col gap-2 ml-1">
                <Heading value="Punjab Convent School" font="font-outfit" />
                <span className="text-sm text-highlight font-outfit">2020</span>
                <span className="text-foreground font-outfit" >
                  Situated near Moga (BhagaPurana). Completed My 12th standarad with <span className="text-highlight" >90%</span> in boards. Thought didn't went to the School it was a dummy School
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex gap-4">
              <IconsTag icontag={BookOpen} />
              <Heading value="Experience" size="text-xl md:text-2xl" />
            </div>
            <div className="mb-8 flex gap-2">
              <Dot size={50} className="text-highlight flex-shrink-0" />
              <div className="text-foreground font-outfit flex items-center" >
                Still searching ...
              </div>
            </div>
          </div>


          <Heading value="My Skills" size="text-3xl" customClass="mb-8" />

          <div className="flex -mx-9 overflow-hidden group">
            <div className="flex gap-14 animate-loop-scroll text-slate-300 group-hover:paused">
              <BiLogoJavascript size={90} className="hover:text-highlight flex-shrink-0" />
              <BiLogoTypescript size={90} className="hover:text-highlight flex-shrink-0" />
              <SiExpress size={90} className="hover:text-highlight flex-shrink-0" />
              <SiNodedotjs size={90} className="hover:text-highlight flex-shrink-0" />
              <RiTailwindCssFill size={90} className="hover:text-highlight flex-shrink-0" />
              <BiLogoMongodb size={90} className="hover:text-highlight flex-shrink-0" />
              <SiPrisma size={90} className="hover:text-highlight flex-shrink-0 mr-14" />
            </div>
            <div className="flex gap-14 animate-loop-scroll text-slate-300 group-hover:paused">
              <BiLogoJavascript size={90} className="hover:text-highlight flex-shrink-0" />
              <BiLogoTypescript size={90} className="hover:text-highlight flex-shrink-0" />
              <SiExpress size={90} className="hover:text-highlight flex-shrink-0" />
              <SiNodedotjs size={90} className="hover:text-highlight flex-shrink-0" />
              <RiTailwindCssFill size={90} className="hover:text-highlight flex-shrink-0" />
              <BiLogoMongodb size={90} className="hover:text-highlight flex-shrink-0" />
              <SiPrisma size={90} className="hover:text-highlight flex-shrink-0 mr-14" />
            </div>
          </div>


          <div className="flex -mx-9 overflow-hidden flex-row-reverse mt-16 group ">
            <div className="flex gap-14 animate-loop-scroll-opposite text-slate-300 group-hover:paused">
              <BiLogoFlutter size={90} className="hover:text-highlight flex-shrink-0" />
              <SiDart size={90} className="hover:text-highlight flex-shrink-0" />
              <TbBrandCpp size={90} className="hover:text-highlight flex-shrink-0" />
              <SiLua size={90} className="hover:text-highlight flex-shrink-0" />
              <SiNeovim size={90} className="hover:text-highlight flex-shrink-0" />
              <SiGnubash size={90} className="hover:text-highlight flex-shrink-0" />
              <SiXcode size={90} className="hover:text-highlight flex-shrink-0 mr-14" />
            </div>
            <div className="flex gap-14 animate-loop-scroll-opposite text-slate-300 group-hover:paused">
              <BiLogoFlutter size={90} className="hover:text-highlight flex-shrink-0" />
              <SiDart size={90} className="hover:text-highlight flex-shrink-0" />
              <TbBrandCpp size={90} className="hover:text-highlight flex-shrink-0" />
              <SiLua size={90} className="hover:text-highlight flex-shrink-0" />
              <SiNeovim size={90} className="hover:text-highlight flex-shrink-0" />
              <SiGnubash size={90} className="hover:text-highlight flex-shrink-0" />
              <SiXcode size={90} className="hover:text-highlight flex-shrink-0 mr-14" />
            </div>
          </div>
        </div>
      </motion.div >
    </>
  )
}

export default ResumeBody;
