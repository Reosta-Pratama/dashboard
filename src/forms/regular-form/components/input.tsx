import React, { useEffect, useState } from 'react'

interface InputProps {
    id: string;
    title: string;
    type: "email" | "hidden" | "number" | "password" | "text";
    label: boolean;
    readonly: boolean;
    shape: "square" | "rounded";
    help?: "info" | "warning" | "error";
    helpText?: string;
    sizing: "small" | "medium" | "large";
    layout: "vertical" | "horizontal";
    placeholder?: string;
    icon?: "left" | "right" | "multiple";
    iconValue?: string | [string, string];
}

export const Input: React.FC<InputProps> = ({id, title, type, label, readonly, shape, help, helpText, sizing, layout, placeholder, icon, iconValue}) => {
    const [shapeInput, setShapeInput] = useState("");
    const [sizeInput, setSizeInput] = useState("")
    const [directionInput, setDirectionInput] = useState(["", ""]);
    const [valueHelp, setValueHelp] = useState("")
    
    useEffect(() => {
        if (shape === "square") {
            setShapeInput("rounded-md");
        } else {
            setShapeInput("rounded-full");
        }

        if (sizing === "small") {
            setSizeInput("text-xs")
        } else if(sizing === "medium"){
            setSizeInput("text-sm")
        } else {
            setSizeInput("text-lg")
        }

        if (layout === "vertical") {
            setDirectionInput(["flex-col", "w-full text-left"])
        } else {
            setDirectionInput(["items-center", "w-20 text-right"])
        }

        if (helpText == null) {
            setValueHelp("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")
        } else {
            setValueHelp(helpText)
        }
    }, [shape, sizing, layout, helpText]);

    
  return (
    <div className="flex flex-col gap-2">
        <div className={`flex gap-2 ${directionInput[0]}`}>
            {
                label == true && <label htmlFor={id} className={`capitalize select-none ${directionInput[1]}`}>{title}</label>
            }
            
            <div className="flex flex-1">
                {
                    (icon != null && (icon === "left" || (icon === "multiple" && Array.isArray(iconValue) && iconValue.length > 0))) && (
                        <div className={`bg-slate-100 flex justify-center items-center 
                            text-slate-800 select-none px-3 py-2
                            border border-solid border-slate-200
                            ${(icon === "left" || icon === "multiple") ? "border-r-0 rounded-l-md" : ""}`}>
                            {icon == "left" && iconValue}
                            {icon === "multiple" && Array.isArray(iconValue) && iconValue.length > 0 && iconValue[0]}
                        </div>
                    )
                }

                <input
                    id={id}
                    name={id} 
                    type={type} 
                    placeholder={placeholder}
                    readOnly={readonly}
                    className={`
                        flex flex-1 shadow-sm px-3 py-2
                        border border-solid border-slate-200
                        transition-all duration-200 ease-in-out
                        focus-visible:outline-none focus:ring-4 focus:ring-primary/20
                        ${readonly == true ? 'bg-slate-100' : ''}
                        ${shapeInput}
                        ${sizeInput}
                        ${(icon == "left" || icon == "multiple") ? "rounded-l-none" : ""}
                        ${(icon == "right" || icon == "multiple") ? "rounded-r-none" : ""}`}/>

                {
                    (icon != null && (icon === "right" || (icon === "multiple" && Array.isArray(iconValue) && iconValue.length > 0))) && (
                        <div className={`bg-slate-100 flex justify-center items-center 
                            text-slate-800 select-none  px-3 py-2
                            border border-solid border-slate-200
                            ${(icon == "right" || icon === "multiple") ? "border-l-0 rounded-r-md" : ""}`}>
                            {icon == "right" && iconValue}
                            {icon === "multiple" && Array.isArray(iconValue) && iconValue.length > 0 && iconValue[1]}
                        </div>
                    )
                }
            </div>


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
