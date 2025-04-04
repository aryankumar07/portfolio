import React from "react"
import { ProfileTag } from "../constants"
import IconsTag from "./Iconstag"

interface InfoCardProp {
  tag: ProfileTag
}


const handelClick = (tag: ProfileTag) => {
  if (tag.link) {
    window.location.href = tag.link
  }
}


const InfoCard: React.FC<InfoCardProp> = ({ tag }) => {
  return (
    <div
      onClick={() => handelClick(tag)}
      className="p-2 mb-1 mt-1 w-auto">
      <div className="flex flex-row justify-start items-center gap-6">
        <IconsTag icontag={tag.icon} />
        <div className="flex flex-col">
          <div className="text-gray-500 text-xs font-outfit">
            {tag.title}
          </div>
          <div className={`text-foreground text-sm font-outfit ${tag.link ? 'cursor-pointer' : ''} `}>
            {tag.content}
          </div>
        </div>
      </div>
    </div>
  )
}


export default InfoCard
