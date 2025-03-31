import React from 'react'
import { ReactNode } from "react"
import { PinIcon } from 'lucide-react'

interface ExplainProps {
  children: ReactNode
}


export const Explain = ({
  children
}: ExplainProps) => {
  return (
    <div style={{
      position: 'relative',
      background: '#64748b', // slate-500 hex code
      color: 'white',
      borderRadius: '0.5rem', // equivalent to rounded-lg (8px)
      padding: '1rem', // equivalent to p-4 (16px)
    }} >
      <div style={{
        position: 'absolute',
        top: '-10px',
        left: '-10px',
        rotate: '-45deg',
        color: 'red'
      }}>
        <PinIcon />
      </div>
      {children}
    </div>
  )
}
