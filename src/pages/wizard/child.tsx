import React, { ReactNode } from 'react'

interface WidgetValueProps {
    children: ReactNode
}

export const WidgetValue: React.FC<WidgetValueProps> = ({children}) => {
  return (
    <div className="flex flex-col gap-5 px-20 py-10 border-t border-slate-200/60">
        {children}
    </div>
  )
}
