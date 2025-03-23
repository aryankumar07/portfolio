import React from 'react'
import { ReactNode } from "react"


interface headingProps {
  children: ReactNode,
  type: string,
}

const styling = {
  primary: 'text-xl font-semibold',
  highlighted: 'text-3xl font-bold'
}


// className={cn(`${styling[type]}`)}>

const Heading: React.FC<headingProps> = ({
  children,
  type
}) => {

  const style = styling[type]


  return (
    <div id='blogHeads' className={`${style}`}>
      {children}
    </div>
  )
}

export { Heading }
