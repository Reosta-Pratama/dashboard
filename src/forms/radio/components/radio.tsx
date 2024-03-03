import React, { useEffect, useState } from 'react'

interface RadioProps {
    id: string;
    name: string;
    title: string;
    value: string;
    help?: "info" | "warning" | "error";
    helpText?: string;
}

export const Radio: React.FC<RadioProps> = ({id, name, title, value, help, helpText}) => {
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
                    name={name} 
                    value={value}
                    type="radio" 
                    onChange={handleCheckboxChange}
                    className={`w-full h-full appearance-none shadow-sm rounded-full
                        border border-solid border-slate-200
                        transition-all duration-200 ease-in-out
                        focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                        checked:bg-primary`}/>
                        
                {
                    checked == true && 
                    <div onClick={handleCheckboxChange}
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[5px] h-[5px] rounded-full'>
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
