import React, { useState } from 'react'

interface ImageZoomProps {
    img: string;
    height: number;
}

export const ImageZoom: React.FC<ImageZoomProps> = ({img, height}) => {
    const [zoom, setZoom] = useState(false)

    const handleZoom = () => {
        setZoom(!zoom)
    } 
  return (
    <>
        <div onClick={handleZoom}
            className={`w-full cursor-pointer duration-300 ease-in-out ${zoom && "opacity-0"}`} 
            style={{ height: height + "px"}}>
            <img
                src={img}
                alt={`Image zoom ${img}`}
                loading='lazy'
                className='w-full h-full object-cover object-center rounded-md'>
            </img>
        </div>

        <div className={`fixed inset-0 w-full h-full
            transition-all duration-300 ease-in-out
            ${zoom ? "visible opacity-100" : "invisible opacity-0"}`}>
            <div onClick={handleZoom} className="absolute -z-[1] inset-0 w-full h-full bg-black/60"></div>
            <div className="absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                    src={img}
                    alt={`Image zoom ${img}`}
                    loading='lazy'
                    className='w-[545px] h-[400px] object-cover object-center'>
                </img>
            </div>
        </div>
    </>
  )
}
