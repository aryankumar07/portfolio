import Line from "../../commons/line";
import LeftFooter from "./left_footer";
import Leftheader from "./Left_header";
import LeftMain from "./left_main";

const LeftConatiner = () => {
    return (
        <div className="m-2 flex flex-col justify-start items-center bg-primary border  border-[#383838] h-[90vh] rounded-3xl sticky top-0">
            <Leftheader />
            <Line color="#2B2B2C" width="80%" />
            <LeftMain />
            <LeftFooter />
        </div>
    )
}


export default LeftConatiner;
