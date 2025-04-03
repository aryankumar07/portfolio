import AnimatedName from "../../commons/animatedName";
import Tags from "../../commons/tags";

const Leftheader = () => {
  return (
    <div className="flex flex-row min-[1336px]:flex-col gap-4">
      <div className="flex justify-center rounded-2xl overflow-hidden shadow-md">
        <div className={`size-28 min-[400px]:size-36`}>
          <img
            src={"/personal_logo.gif"}
            alt="Placeholder"
            className="cursor-pointer w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 pb-2">
        <AnimatedName title="Aryan" />
        <Tags value="Web developer" />
      </div>
    </div>
  )
}


export default Leftheader;
