import { useState } from "react";
import { motion } from "motion/react";
import LeftFooter from "./left_footer";
import LeftHeader from "./Left_header";
import LeftMain from "./left_main";
import { UseScreenSize } from "../../hooks/useScreenSize";
import ContactButton from "./Contactbuttn";
import DropDownButton from "../../commons/dropDownButton";

const LeftContainer = () => {
  const [active, setActive] = useState(false);

  const { isLarge, isMedium, isSmall } = UseScreenSize();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="sticky top-[4.5rem]">
        <div className="relative flex flex-col min-[1336px]:items-center bg-primary border border-[#383838] px-6 py-8 pt-10 w-auto rounded-2xl min-w-64">
          <LeftHeader />

          {(isLarge || active) && (
            <>
              <LeftMain />
              <LeftFooter />
            </>
          )}

          {isMedium && <ContactButton setActive={setActive} />}
          {isSmall && <DropDownButton setIsActive={setActive} isActive={active} />}
        </div>
      </div>
    </motion.div>
  );
};

export default LeftContainer;
