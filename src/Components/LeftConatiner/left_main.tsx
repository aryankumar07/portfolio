import InfoCard from "../../commons/infoCard";
import { Profiletags } from "../../constants";

const LeftMain = () => {
  return (
    <div className="mt-2">
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
