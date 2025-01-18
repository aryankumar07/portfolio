import React from "react";
import { X } from 'lucide-react'

interface PopupProps {
  isOpen: boolean
}

const Popup: React.FC<PopupProps> = ({
  isOpen
}) => {

  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex fixed  justify-center items-center text-foreground rounded-xl bg-primary h-auto w-full mt-[25vh] lg:h-96 md:h-80 lg:w-96 md:w-80 md:mt-[20vh] lg:ml-[35vw] md:ml-[23vw] ">
      <div className="flex h-full w-full flex-col justify-start items-center">
        <div className="h-auto p-1 w-full flex flex-row justify-end items-end">
          <X size={40} className="hover:text-highlight" />
        </div>
        <div className="border h-auto w-full">
          hello there
        </div>
      </div>
    </div>
  )

}


export default Popup;

