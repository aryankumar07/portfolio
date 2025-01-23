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
        <div id="OutsideDiv" className="fixed flex inset-0 justify-center items-center overflow-x-hidden overflow-y-auto z-50 bg-neutral-800/70 backdrop-blur-sm">
            <div id="InsideDiv" className={`flex fixed border border-[#383838] justify-center items-center text-foreground rounded-xl bg-primary h-auto w-full
            ${big ? 'md:h-[80%] md:w-[50%] md:ml-[8vw] lg:mt-4 md:mt-0' : 'mt-[25vh] lg:h-72  lg:w-[50%] md:w-[80%] md:mt-[8vh] lg:ml-[15vw] md:ml-[-1vw]'}`}>
                <div className="flex h-full w-full flex-col justify-start items-center">
                    {
                        !big ?
                            <div className="h-auto p-1 w-full flex flex-row justify-end items-end">
                                <X size={30} className="hover:text-highlight cursor-pointer mr-4" onClick={setClose} />
                            </div> : null
                    }

                    <div className="h-auto w-full">
                        {data}
                    </div>
                    <Line height="1px" className="absolute bottom-12 hidden" />
                    {
                        big ?
                            <Button value="Done" onClick={setClose} className="absolute mb-2 mr-2 right-0 bottom-0" /> :
                            null
                    }
                </div>
            </div>
        </div>
    )

}


export default Popup;

