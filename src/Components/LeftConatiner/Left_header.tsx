import ImageContainer from "../../commons/ImageContainer";
import Tags from "../../commons/tags";

const Leftheader = () => {
  return (
    <div className="flex flex-row lg:flex-col gap-5 items-center justify-start lg:justify-center lg:ml-10 lg:mr-10 lg:mt-10 lg:mb-5 md:pt-2 md:pb-2 md:pl-[100px]  lg:p-2 h-auto ">
      <ImageContainer />
      <div className="md:flex flex-col">
        <div className="text-foreground text-3xl font-outfit">
          Aryan
        </div>
        <Tags value="Web developer" />
      </div>
    </div>
  )
}


export default Leftheader;
