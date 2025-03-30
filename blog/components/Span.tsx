import React, { ReactNode } from 'react'

interface SpanProps {
  color?: string;
  children: ReactNode
}

export const Span: React.FC<SpanProps> = ({
  color = '#CC5500',
  children
}) => {
  return (
    <span style={{ color }}>
      {children}
    </span>
  )
}

