import React, { useEffect } from "react";
import { X, Minus, Maximize2 } from "lucide-react";
import { cn } from '../../libs/utils.ts'
import Button from "../../commons/button";
import { useMaximumStore } from "../../store/useMaximumStore.ts";

interface PopupProps {
  isOpen: boolean;
  data?: JSX.Element;
  setClose: () => void;
  big?: boolean;
  window?: boolean;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  setClose,
  data = <h1>Default body</h1>,
  big = false,
  window = false,
}) => {

  const maximum = useMaximumStore((state) => state.maximum)
  const toggleMaxium = useMaximumStore((state) => state.toggleMaximum)



  const handelMaximize = () => {
    toggleMaxium()
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;
      if (!targetElement.closest("#InsideDiv")) {
        setClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/50 z-50">
      <div
        id="InsideDiv"
        className={cn(
          'relative bg-primary font-outfit rounded-xl',
          'overflow-y-auto border border-[#383838] shadow-lg',
          'transition-all duration-300 ease-in-out',
          `${maximum ? 'w-full h-full' : 'w-[90%] md:w-[60%] lg:w-[50vw] max-h-[80vh]'}`
        )}
      >

        {/* Header - buttons */}
        {
          window && (
            <div className="group flex gap-1 justify-start items-center mt-1 ml-1">
              <div className="flex items-center justify-center bg-red-600 rounded-full cursor-pointer w-3 h-3">
                <div className="hidden group-hover:block">
                  <X
                    size={12}
                    onClick={setClose}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center bg-yellow-500 rounded-full cursor-not-allowed w-3 h-3">
                <div className="hidden group-hover:block">
                  <Minus size={12} />
                </div>
              </div>
              <div className="flex items-center justify-center bg-green-500 rounded-full cursor-pointer w-3 h-3">
                <div
                  onClick={handelMaximize}
                  className="hidden group-hover:block">
                  <Maximize2
                    size={8}
                  />
                </div>
              </div>
            </div>
          )
        }
        {!big && !window && (
          <div className="absolute top-3 right-3 transition-colors ease-linear rounded">
            <X
              size={16}
              className="cursor-pointer bg-red-400 rounded-full"
              onClick={setClose}
            />
          </div>
        )}


        {/* Body */}
        <div className="p-6 h-full w-full">
          {data}
          {big && <div className="flex items-center justify-end mt-2"><Button value="Done" onClick={setClose} /></div>}
        </div>

      </div>
    </div>
  );
};

export default Popup;
