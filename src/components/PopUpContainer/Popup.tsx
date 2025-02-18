import React, { useEffect } from "react";
import { X } from "lucide-react";
import Button from "../../commons/button";
import Line from "../../commons/line";

interface PopupProps {
  isOpen: boolean;
  data?: JSX.Element;
  setClose: () => void;
  big?: boolean;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  setClose,
  data = <h1>Default body</h1>,
  big = false,
}) => {
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
        className="relative bg-primary font-outfit rounded-xl w-[90%] md:w-[60%] lg:w-[50vw] max-h-[80vh] overflow-y-auto border border-[#383838] shadow-lg"
      >
        {!big && (
          <div className="absolute top-3 right-3 bg-neutral-600 hover:bg-neutral-500 transition-colors ease-linear rounded">
            <X
              size={30}
              className="cursor-pointer"
              onClick={setClose}
            />
          </div>
        )}
        <div className="p-6">
          {data}
          {big && <div className="flex items-center justify-end mt-2"><Button value="Done" onClick={setClose} /></div>}
        </div>
      </div>
    </div>
  );
};

export default Popup;
