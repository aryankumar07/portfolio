import InfoCard from "../../commons/infoCard";
import { Profiletags } from "../../constants";

const LeftMain = () => {
  return (
    <div className="max-[1336px]:border-b-[0.5px] border-t-[0.5px] border-neutral-700 my-4 py-4">
      <div className="grid min-[600px]:grid-cols-2 min-[1336px]:grid-cols-1">
        {Profiletags.map((tag) => (
          <InfoCard key={tag.id} tag={tag} />
        ))}
      </div>
    </div>
  )
}


export default LeftMain;
