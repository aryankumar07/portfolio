import React from "react"

interface TagProps {
    value: string
}


const Tags: React.FC<TagProps> = ({ value }) => {
    return (
        <div className="text-foreground p-2 rounded-md bg-background font-outfit">
            {
                value
            }
        </div>
    )
}


export default Tags
