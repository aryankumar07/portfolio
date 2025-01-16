import React from "react"
import ProfileTag from "../constants"
import IconsTag from "./Iconstag"

interface InfoCardProp {
  tag: ProfileTag
}


const InfoCard: React.FC<InfoCardProp> = ({ tag }) => {
  return (
    <div className="p-2 mb-1 mt-1 w-auto">
      <div className="flex flex-row gap-10 justify-start items-center">
        <IconsTag icontag={tag.icon} />
        <div className="flex flex-col">
          <div className="text-gray-500 text-sm font-outfit">
            {
              tag.title
            }
          </div>
          <div className="text-foreground text-sm font-outfit cursor-pointer">
            {
              tag.content
            }
          </div>
        </div>
      </div>
    </div>
  )
}


export default InfoCard
