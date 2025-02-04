import React from "react"

interface TagProps {
  value: string
}


const Tags: React.FC<TagProps> = ({ value }) => {
  return (
    <span className="text-foreground px-4 py-1 text-center rounded-md text-sm bg-greyish font-outfit">
      {value}
    </span>
  )
}


export default Tags
