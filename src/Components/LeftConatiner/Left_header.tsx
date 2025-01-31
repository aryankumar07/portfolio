import AnimatedName from "../../commons/animatedName";
import ImageContainer from "../../commons/ImageContainer";
import Tags from "../../commons/tags";

const Leftheader = () => {
  return (
    <div className="flex flex-row lg:flex-col gap-5 items-center justify-start lg:justify-center lg:ml-10 lg:mr-10 lg:mt-10 lg:mb-5 md:pt-2 md:pb-2 md:pl-[100px]  lg:p-2 h-auto ">
      <ImageContainer src="/image_header.jpg" />
      <div className="md:flex flex-col gap-2 justify-center items-center">
        <div className="text-foreground text-3xl md:text-5xl font-outfit">
          <AnimatedName title="Aryan" />
        </div>
        <Tags value="Web developer" />
      </div>
    </div>
  )
}


export default Leftheader;
