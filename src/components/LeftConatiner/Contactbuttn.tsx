import React from "react";

interface ContactbuttonProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}


const Contactbutton: React.FC<ContactbuttonProps> = ({
  setActive
}) => {
  return (
    <button
      onClick={() => setActive((prev) => !prev)}
      className="border-l border-b absolute top-0 right-0 font-outfit text-foreground bg-greyish border-[#383838] p-4 rounded-tr-2xl rounded-bl-2xl hover:text-highlight ">
      Show Contacts
    </button>
  )
}

export default Contactbutton;
