import React from "react"
import { ChevronUp } from 'lucide-react'

interface DropDownbuttonDrop {
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const DropDownbutton: React.FC<DropDownbuttonDrop> = ({
  isActive,
  setIsActive
}) => {

  return (
    <div
      onClick={() => setIsActive((prev) => !prev)}
      className={`absolute top-0 right-0 border-l border-b border-[#383838] p-2 bg-greyish rounded-tr-2xl rounded-bl-2xl text-foreground hover:text-highlight}`}>
      <ChevronUp className={`${isActive ? 'rotate-180' : ''} transform transition-transform duration-300`} />
    </div>
  )

}

export default DropDownbutton
