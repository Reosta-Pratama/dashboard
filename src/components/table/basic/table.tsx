import React, { ReactNode } from 'react'

interface BasicTableProps {
    addClass?: string | null;
    children: ReactNode;
}

const BasicTable: React.FC<BasicTableProps> = ({addClass, children}) => {
    return (
        <table className={`w-full text-left ${addClass || ""}`}>
            {children}
        </table>
    )
}

export default BasicTable