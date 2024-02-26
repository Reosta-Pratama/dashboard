import React, {ReactNode} from 'react'

interface BoxCodeProps {
    children: ReactNode;
}

export const BoxCode: React.FC<BoxCodeProps> = ({children}) => {
    return (
        < div className = "bg-[#f8fafc] overflow-x-scroll max-w-screen-lg-tablets rounded-md font-mono" > {
            children
        }</div>
    )
}
