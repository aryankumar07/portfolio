import { useState } from "react";
import Line from "../../commons/line";
import LeftFooter from "./left_footer";
import Leftheader from "./Left_header";
import LeftMain from "./left_main";
import { UseScreenSize } from "../../hooks/useScreenSize";
import Contactbutton from "./Contactbuttn";

const LeftConatiner = () => {
  const [active, setActive] = useState<boolean>(false);

  const size = UseScreenSize();


  return (
    <div className="m-2 flex flex-col lg:items-center bg-primary border  border-[#383838] h-auto rounded-3xl sticky top-0">
      <div className="flex flex-row justify-between">
        <Leftheader />
        {
          size === "medium" ? <Contactbutton setActive={setActive} /> : null
        }

      </div>
      <Line color="#2B2B2C" width="80%" />
      {
        active || size === "large" ? <LeftMain /> : null
      }
      {
        active || size === "large" ? <LeftFooter /> : null
      }
    </div>
  )
}


export default LeftConatiner;
