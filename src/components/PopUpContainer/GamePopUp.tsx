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
    <div className="m-2">
      <div className="flex flex-row">
        <div className="flex flex-col justify-center items-center gap-5 p-3">
          <ImageContainer src={data.image} />
          <div className="flex flex-row gap-0">
            <SiComma size={30} className="rotate-[200deg] text-highlight" />
            <SiComma size={30} className="rotate-[200deg] text-highlight" />
          </div>
        </div>
        <div className="flex flex-col p-3">
          <Heading value={data.name} size="text-4xl" />
          <Heading value={data.game} font="font-thin font-outfit" size="text-sm" />
          <p className="mt-8">
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
