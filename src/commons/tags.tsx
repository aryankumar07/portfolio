import React from "react"

interface TagProps {
  value: string
}


const Tags: React.FC<TagProps> = ({ value }) => {
  return (
    <div className="text-foreground  md:p-1 rounded-md text-sm bg-greyish font-outfit">
      {
        value
      }
    </div>
  )
}


export default Tags
