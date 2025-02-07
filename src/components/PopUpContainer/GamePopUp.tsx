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
    <div className="">
      <div className="">
        <div className="">
          <ImageContainer src={data.image} />
          <div className="">
            <SiComma size={30} className="rotate-[200deg] text-highlight" />
            <SiComma size={30} className="rotate-[200deg] text-highlight" />
          </div>
        </div>
        <div className="">
          <Heading value={data.name} size="" />
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
