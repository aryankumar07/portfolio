import { SiComma } from "react-icons/si";
import ImageContainer from "../../commons/ImageContainer";
import { Facts } from "../../constants";
import { useGameModel } from "../../store/useGameModal";
import Popup from "./Popup"
import Heading from "../../commons/heading";

const GamePopUp = () => {
  const isOpen = useGameModel((state) => state.open);
  const setClose = useGameModel((state) => state.setClose);
  const index = useGameModel((state) => state.index);
  const data = Facts[index];

  const body = (
    <div className="text-foreground">
      <div className="flex items-start justify-between p-4 ">
        <div className="p-4 flex flex-col items-center justify-center gap-4">
          <ImageContainer src={data.image} />
          <div className="flex items-center justify-center">
            <SiComma size={30} className="rotate-[200deg] text-highlight" />
            <SiComma size={30} className="rotate-[200deg] text-highlight" />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-start items-start">
          <Heading value={data.name} size="text-3xl" customClass="mt-6 mb-2" />
          <p>{data.game}</p>
          <p className="">
            {data.quote}
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <Popup isOpen={isOpen} setClose={setClose} data={body} />
  )
}

export default GamePopUp;
