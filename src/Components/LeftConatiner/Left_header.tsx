import ImageContainer from "../../commons/ImageContainer";
import Tags from "../../commons/tags";

const Leftheader = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center m-3 p-2 h-auto ">
      <ImageContainer />
      <div className="text-foreground text-3xl font-outfit">
        Aryan Kumar
      </div>
      <Tags value="Web developer" />
    </div>
  )
}


export default Leftheader;
