import React from "react";

interface ContactbuttonProps {
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}


const Contactbutton: React.FC<ContactbuttonProps> = ({
    setActive
}) => {
    return (
        <div
            onClick={() => setActive((prev) => !prev)}
            className="border h-[40px] text-foreground bg-greyish border-[#383838] flex justify-center items-center p-4 rounded-tr-2xl rounded-bl-2xl hover:text-highlight ">
            Contact Button
        </div>
    )
}

export default Contactbutton;
