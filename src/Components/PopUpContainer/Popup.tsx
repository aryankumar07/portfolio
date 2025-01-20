import React from "react";
import { X } from 'lucide-react'

interface PopupProps {
  isOpen: boolean
  data: JSX.Element
  setClose: () => void
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  setClose,
  data
}) => {

  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex fixed  justify-center items-center text-foreground rounded-xl bg-primary h-auto w-full mt-[25vh] lg:h-72  lg:w-[50%] md:w-[80%] md:mt-[20vh] lg:ml-[23vw] md:ml-[-1vw] ">
      <div className="flex h-full w-full flex-col justify-start items-center">
        <div className="h-auto p-1 w-full flex flex-row justify-end items-end">
          <X size={30} className="hover:text-highlight cursor-pointer mr-4" onClick={setClose} />
        </div>
        <div className="h-auto w-full">
          {data}
        </div>
      </div>
    </div>
  )

}


export default Popup;

