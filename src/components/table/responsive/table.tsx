import React, { ReactNode } from 'react'

interface ResponsiveTableProps {
    addClass?: string | null;
    children: ReactNode;
}

const ResponsiveTable: React.FC<ResponsiveTableProps> = ({addClass, children}) => {
    return (
        <div className="overflow-x-auto">
            <table className={`w-full text-left whitespace-nowrap ${addClass || ""}`}>
                {children}
            </table>
        </div>
    )
}

export default ResponsiveTable