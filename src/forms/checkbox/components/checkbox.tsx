import React, { useEffect, useState } from 'react'
import { HiCheck } from 'react-icons/hi';

interface CheckboxProps {
    id: string;
    title: string;
    value: string;
    help?: "info" | "warning" | "error";
    helpText?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({id, title, value, help, helpText}) => {
    const [checked, setChecked] = useState(false)
    const [valueHelp, setValueHelp] = useState("")
    
    useEffect(() => {
        if (helpText == null) {
            setValueHelp("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")
        } else {
            setValueHelp(helpText)
        }
    }, [helpText]);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

  return (
    <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
            <div className="relative flex w-4 h-4">
                <input
                    id={id}
                    name={id} 
                    value={value}
                    type="checkbox" 
                    onChange={handleCheckboxChange}
                    className={`w-full h-full appearance-none shadow-sm rounded
                        border border-solid border-slate-200
                        transition-all duration-200 ease-in-out
                        focus-visible:outline-none focus:ring-4 focus:ring-primary/20`}/>
                        
                {
                    checked == true && 
                    <div  onClick={handleCheckboxChange}
                        className='absolute inset-0 bg-primary w-full h-full rounded'>
                        <span className='w-full h-full flex justify-center items-center 
                            text-xs text-white font-semibold'>
                            <HiCheck />
                        </span>
                    </div>
                }
            </div>

            <label htmlFor={id} className="capitalize select-none">{title}</label>
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
