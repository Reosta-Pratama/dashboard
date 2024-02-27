import React, { ReactNode } from 'react'

interface HeadTableProps {
    addClass?: string | null;
    children: ReactNode;
}

const HeadTable: React.FC<HeadTableProps> = ({addClass, children}) => {
    return (
        <table className={`w-full text-left ${addClass || ""}`}>
            {children}
        </table>
    )
}

export default HeadTable