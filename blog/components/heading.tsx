import React from 'react'
import { ReactNode } from "react"


interface headingProps {
  id: string,
  children: ReactNode,
  type: string,
}

const styling = {
  primary: 'text-xl font-semibold',
  highlighted: 'text-3xl font-bold',
  big: 'text-3xl font-bold'
}



const Heading: React.FC<headingProps> = ({
  id,
  children,
  type
}) => {

  const style = styling[type]


  return (
    <div id={id} className={`${style}`}>
      {children}
    </div>
  )
}

export { Heading }
