import React, { ReactNode, useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi';

interface SelectProps {
    id: string;
    label: boolean;
    help?: "info" | "warning" | "error";
    helpText?: string;
    sizing: "small" | "medium" | "large";
    onChange?: () => void;
    children: ReactNode;
}

export const Select: React.FC<SelectProps> = ({id, label, help, helpText, sizing, onChange, children}) => {
    const [valueHelp, setValueHelp] = useState("")

    useEffect(() => {
        if (helpText == null) {
            setValueHelp("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")
        } else {
            setValueHelp(helpText)
        }
    }, []);

    
  return (
    <div className="flex flex-col gap-2">
        <div className='relative'>
            <select 
                name={id} 
                id={id}
                onChange={onChange}
                className={`bg-white w-full appearance-none shadow-sm rounded-md
                    border border-solid border-slate-200
                    transition-all duration-300 ease-in-out
                    ${sizing == "large" ? "text-lg pl-4 pr-8 py-2" : ""}
                    ${sizing == "medium" ? "text-sm pl-3 pr-8 py-2" : ""}
                    ${sizing == "small" ? "text-xs pl-2 pr-8 py-2" : ""}`}>
                    {children}
            </select>

            <span className={`absolute top-1/2 right-4 -translate-y-1/2 
                ${sizing == "large" ? "text-xl" : ""}
                ${sizing == "medium" ? "text-lg" : ""}
                ${sizing == "small" ? "text-base" : ""}`}>
                <FiChevronDown />
            </span>
        </div>

        {
            help == "info" && <p className='text-xs text-slate-500'>{valueHelp}</p>
        }

        {
            help == "warning" && <p className='text-warning'>{valueHelp}</p>
        }

        {
            help == "error" && <p className='text-danger'>{valueHelp}</p>
        }
    </div>
  )
}
