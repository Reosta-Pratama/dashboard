import { useState } from 'react';

type TooltipStatus = {
    [key: string]: boolean;
}

export const useTooltipBasic = () => {
    const [tooltipStatus, setTooltipStatus] = useState<TooltipStatus>({});

    const handleHover = (tooltipName: string) => {
        setTooltipStatus((prevState) => ({
            ...prevState,
            [tooltipName]: true,
        }));
    };

    const handleLeave = (tooltipName: string) => {
        setTooltipStatus((prevState) => ({
            ...prevState,
            [tooltipName]: false,
        }));
    };

    const isActive = (tooltipName: string) => {
        return tooltipStatus[tooltipName] || false;
    };

    return { isActive, handleHover, handleLeave };
};

export default useTooltipBasic;
