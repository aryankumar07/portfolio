import Line from "../../commons/line";
import Leftheader from "./Left_header";
import LeftMain from "./left_main";

const LeftConatiner = () => {
    return (
        <div className="m-2 flex flex-col justify-start items-center bg-primary  h-[90vh] rounded-lg sticky top-0">
            <Leftheader />
            <Line color="#191f22" width="80%" />
            <LeftMain />
        </div>
    )
}


export default LeftConatiner;
