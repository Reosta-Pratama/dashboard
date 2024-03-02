import React, { ReactNode, useEffect, useRef } from 'react'

interface TabValueBoxedProps {
    children: ReactNode;
    dataTab: string;
}

export const TabValueBoxed: React.FC<TabValueBoxedProps> = ({children, dataTab}) => {
    const valueTabRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const valueTabElement = valueTabRef.current;
        if (valueTabElement) {
            const tabContents = document.querySelectorAll('.tab-content-boxed');
            tabContents.forEach((element, index) => {
                if (index !== 0) {
                    element.classList.add('hidden');
                }
                else{
                    element.classList.remove('hidden');
                    element.classList.add('flex');
                }
            });
        }
    }, []);

    return (
        <div
            ref={valueTabRef}
            data-tab={dataTab}
            className="tab-content-boxed hidden
                opacity-100 leading-[1.625] 
                transition-all duration-300 ease-in-out">
            {children}
        </div>
    )
}
