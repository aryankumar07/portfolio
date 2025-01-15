import Line from "../../commons/line";
import LeftFooter from "./left_footer";
import Leftheader from "./Left_header";
import LeftMain from "./left_main";

const LeftConatiner = () => {
    return (
        <div className="m-2 flex flex-col justify-start items-center bg-primary  h-[90vh] rounded-2xl sticky top-0">
            <Leftheader />
            <Line color="#191f22" width="80%" />
            <LeftMain />
            <LeftFooter />
        </div>
    )
}


export default LeftConatiner;
