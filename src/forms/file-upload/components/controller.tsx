import { useState, useRef } from 'react';

interface FileUploadProps {
    id: string;
    name: string;
    desc: string;
    imgSize: number;
    imgType: string[];
    imgMultiple: boolean;
}

export const useUploadImage = (props: FileUploadProps) => {
    const { id, name, desc, imgSize, imgType, imgMultiple } = props;
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const maxSizeBytes = imgSize * 1024 * 1024;
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState("");

    // Validasi jenis file
    const validateFileType = (file: File): boolean => {
        const allowedExtensions = imgType.map((type) => `${type.toLowerCase()}`);
        const fileNameParts = file.name.split('.');
        const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();
        return allowedExtensions.includes(fileExtension);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const newFiles: File[] = [];
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                // Periksa duplikasi nama file
                if (!selectedFiles.some((selectedFile) => selectedFile.name === file.name)) {
                    // Periksa ukuran file
                    if (maxSizeBytes !== 0 && file.size > maxSizeBytes) {
                        setMessage(`The file "${file.name}" exceeds the maximum allowed size of ${imgSize} MB.`);
                    } else if (!validateFileType(file)) {
                        setMessage(`Invalid file type. Please upload files with the following extensions only: ${imgType.join(', ')}`);
                    } else {
                        newFiles.push(file);
                        setMessage("");
                    }
                }
            }

            if (imgMultiple) {
                setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
            } else {
                if (newFiles.length > 1) {
                    setMessage("You can only upload one file.");
                } else {
                    setSelectedFiles(newFiles);
                }
            }
        }
    };

    const handleDropImage = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();

        const files = event.dataTransfer.files;
        if (files && files.length > 0) {
            const newFiles: File[] = [];
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (!selectedFiles.some((selectedFile) => selectedFile.name === file.name)) {
                    if (maxSizeBytes !== 0 && file.size > maxSizeBytes) {
                        setMessage(`The file "${file.name}" exceeds the maximum allowed size of ${imgSize} MB.`);
                    } else if (!validateFileType(file)) {
                        setMessage(`Invalid file type. Please upload files with the following extensions only: ${imgType.join(', ')}`);
                    } else {
                        newFiles.push(file);
                    }
                }
            }

            if (imgMultiple) {
                setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
                setMessage("");
            } else {
                if (newFiles.length > 1) {
                    setMessage("You can only upload one file.");
                } else {
                    setSelectedFiles(newFiles);
                    setMessage("");
                }
            }
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleRemoveFile = (index: number) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1);
        setSelectedFiles(updatedFiles);
    };

    return {
        id,
        name,
        desc,
        imgSize,
        imgType,
        imgMultiple,
        selectedFiles,
        fileInputRef,
        message,
        handleFileChange,
        handleUploadClick,
        handleRemoveFile,
        handleDropImage,
        handleDragOver,
    };
};
