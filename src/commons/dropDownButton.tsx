import React from "react"
import { ChevronUp } from 'lucide-react'

interface DropDownbuttonDrop {
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const DropDownbuttton: React.FC<DropDownbuttonDrop> = ({
  isActive,
  setIsActive
}) => {

  return (
    <div
      onClick={() => setIsActive((prev) => !prev)}
      className={`border border-[#383838] p-2 h-11 bg-greyish rounded-tr-3xl rounded-bl-2xl text-foreground hover:text-highlight}`}>
      <ChevronUp className={`${isActive ? 'rotate-180' : ''} transform transition-transform duration-300`} />
    </div>
  )

}

export default DropDownbuttton
