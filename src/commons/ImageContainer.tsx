import React from "react";

interface ImageContainerprops {
  src: string,
  width?: string,
  height?: string,
  background?: string,
}

const ImageContainer: React.FC<ImageContainerprops> = ({ src, width = "w-40", height = "h-40", background = "bg-[#373738]" }) => {
  return (
    <div className={`md:${width} md:${height} ${background} w-20 h-20  rounded-3xl overflow-hidden shadow-md`}>
      <img
        src={src}
        alt="Placeholder"
        className="w-full h-full object-fill"
      />
    </div>
  );
};

export default ImageContainer;
