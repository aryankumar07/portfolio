
import React, { ReactNode } from 'react'

interface SpanProps {
  background?: string;
  children: ReactNode
}

export const Color: React.FC<SpanProps> = ({
  background = '#CC5500',
  children
}) => {
  return (
    <span style={{ background, color: '#ffffff' }}>
      {children}
    </span>
  )
}

