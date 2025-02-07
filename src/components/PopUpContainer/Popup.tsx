import React, { useEffect } from "react";
import { X } from 'lucide-react'
import Button from "../../commons/button";
import Line from "../../commons/line";

interface PopupProps {
  isOpen: boolean
  data?: JSX.Element
  setClose: () => void
  big?: boolean
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  setClose,
  data = <h1>Default body </h1>,
  big = false
}) => {


  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // used event.target instead of event.cureentarget ...
      const handleEvent = event.target as HTMLElement
      if (!handleEvent.closest("#InsideDiv")) {
        setClose()
      }
    }
    // if the popUp is open then only add the eventListner of used without isOpen then the eventlistner is added to as soon as the site is loaded
    if (isOpen) {
      const PopUpdiv = document.getElementById("OutsideDiv")
      PopUpdiv!.addEventListener('mousedown', handleClick)
    }
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [isOpen, setClose])



  if (!isOpen) {
    return null;
  }



  return (
    <div id="OutsideDiv" className="">
      <div id="InsideDiv" className={``}>
        <div className="">
          {
            !big ?
              <div className="">
                <X size={30} className="hover:text-highlight cursor-pointer mr-4" onClick={setClose} />
              </div> : null
          }

          <div className="">
            {data}
          </div>
          <Line height="1px" className="" />
          {big && <Button value="Done" onClick={setClose} className="" />}
        </div>
      </div>
    </div>
  )

}


export default Popup;

