import { useState } from "react";
import Line from "../../commons/line";
import LeftFooter from "./left_footer";
import Leftheader from "./Left_header";
import LeftMain from "./left_main";
import { UseScreenSize } from "../../hooks/useScreenSize";
import Contactbutton from "./Contactbuttn";
import DropDownbuttton from "../../commons/dropDownButton";
import { motion } from "motion/react";

const LeftConatiner = () => {
  const [active, setActive] = useState<boolean>(false);

  const size = UseScreenSize();


  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="m-2 flex flex-col lg:items-center bg-primary border  border-[#383838] h-auto rounded-3xl sticky top-0">
        <div className="flex flex-row justify-between">
          <Leftheader />
          {
            size === "medium" ? <Contactbutton setActive={setActive} /> : null
          }
          {
            size === "small" ? <DropDownbuttton setIsActive={setActive} isActive={active} /> : null
          }

        </div>
        {
          size === "large" ?
            <Line color="#2B2B2C" width="80%" /> : null
        }
        {
          active ? <Line width="100%" color="#2B2B2C" /> : null
        }
        {
          active || size === "large" ? <LeftMain /> : null
        }
        {
          active ? <Line width="100%" color="#2B2B2C" /> : null
        }

        {
          active || size === "large" ? <LeftFooter /> : null
        }
      </div>
    </motion.div>
  )
}


export default LeftConatiner;
