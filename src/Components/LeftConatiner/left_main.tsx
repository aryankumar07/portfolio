import InfoCard from "../../commons/infoCard";
import { Profiletags } from "../../constants";

const LeftMain = () => {
    return (
        <div className="grid grid-cols-2 justify-center lg:grid-cols-1 lg:justify-start lg:grid-flow-row">
            {
                Profiletags.map((tag) => {
                    return (
                        <InfoCard key={tag.id} tag={tag} />
                    )
                })
            }
        </div>
    )
}


export default LeftMain;
