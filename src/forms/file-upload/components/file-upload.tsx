import { OnlyIconBtnDanger } from '@/components/button/only-icon/style/btn-danger';
import React, { useRef, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { useUploadImage } from './controller';
import Image from 'next/image';

interface FileUploadProps {
    id: string;
    name: string;
    desc: string;
    imgSize: number;
    imgType: string[];
    imgMultiple: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = (props) => {
    const {
        id,
        name,
        desc,
        imgSize,
        imgType,
        imgMultiple
    } = props;

    const {
        selectedFiles,
        fileInputRef,
        message,
        handleFileChange,
        handleUploadClick,
        handleRemoveFile,
        handleDropImage,
        handleDragOver
    } = useUploadImage(props);

    return (
        <div className="flex flex-col gap-2">
            <div className='relative w-full min-h-[150px] flex rounded-md p-5
                    border-2 border-dashed border-black/60'>
                <div onClick={handleUploadClick} 
                    onDrop={handleDropImage}
                    onDragOver={handleDragOver}
                    className="absolute inset-0 w-full h-full"></div>

                {
                    selectedFiles.length < 1 &&
                    <label htmlFor={id}
                        className="w-full h-full cursor-pointer">
                        <div className="flex flex-col items-center text-center gap-0 my-[42px]">
                            <p className='text-lg font-medium'>Drop files here or click to upload</p>

                            {
                                (desc != undefined) &&
                                <p className='text-gray-600'>{desc}</p>
                            }
                        </div>
                    </label>
                }

                <input
                    ref={fileInputRef}
                    type="file"
                    id={id}
                    name={name}
                    className='hidden'
                    multiple={imgMultiple}
                    onChange={handleFileChange}
                />

                <ul className='relative z-10 flex flex-wrap gap-4'>
                    {
                        selectedFiles.map((file, index) => (
                            <li key={index} className='relative group w-[120px] h-[120px] 
                                rounded-[20px] shadow overflow-hidden'>
                                <Image src={URL.createObjectURL(file)}
                                    alt={`Input File ${index + 1}`}
                                    width={120}
                                    height={120}
                                    className='w-full h-full object-cover object-center
                                        transition-all duration-300 ease-linear
                                        group-hover:scale-110 group-hover:blur-sm'>
                                </Image>
                                
                                <div className="absolute inset-0 w-full h-full hidden
                                    transition-all duration-300 ease-in-out
                                    group-hover:block">
                                    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className='w-fit bg-slate-600 rounded-[3px] px-2
                                                    text-white text-center'>
                                                <strong>{parseFloat((file.size / (1024 * 1024)).toFixed(2))} </strong>
                                                MB
                                            </span>
                                            <span className='w-[90px] bg-slate-600 rounded-[3px] px-2 overflow-hidden
                                                text-white text-center text-ellipsis whitespace-nowrap '>
                                                {file.name}
                                            </span>
                                        </div>

                                        <OnlyIconBtnDanger 
                                            addType='button' 
                                            addClass='px-2 py-1'
                                            func={() => handleRemoveFile(index)}>
                                            <FiX />
                                        </OnlyIconBtnDanger>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {
                message !== "" &&
                <p className='text-danger'>{ message }</p>
            }
        </div>
    );
};
