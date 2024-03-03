import React, { useEffect, useState } from 'react'

interface SwitchProps {
    id: string;
    label?: "left" | "right";
    title?: string;
    onSwitchChange: (newValue: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({id, label, title, onSwitchChange}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleSwitch = () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        onSwitchChange(newValue);
    };

  return (
    <div>
        <label htmlFor={id} className='cursor-pointer flex items-center gap-3'>
            {
                label == "left" && <p className='select-none'>{title}</p>
            }

            <div className={`relative w-[38px] h-6 rounded-full shadow-sm 
                border border-solid duration-300 ease-in-out
                ${isChecked ? 'bg-primary border-primary' : 'bg-white border-slate-200'}`}>
                <div className={`bg-white absolute top-1/2 -translate-y-1/2 mx-[2px]
                    w-5 h-5 rounded-full duration-300 ease-linear
                    ${isChecked ? 'right-0' : 'left-0 shadow-[1px_1px_3px_rgba(0,0,0,.25)]'}`}>
                </div>
            </div>

            {
                label == "right" && <p className='select-none'>{title}</p>
            }
        </label>

        <input
            id={id}
            type="checkbox"
            className='hidden'
            checked={isChecked}
            onChange={handleSwitch} 
        />
    </div>
  )
}
