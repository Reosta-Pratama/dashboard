import {useEffect, useState} from "react";

export const useNotification = () => {
    const [change, setChange] = useState(true);
    const [close, setClose] = useState(false);

    const closeNotif = () => {
        setTimeout(() => {
            setClose(true);
            console.log("testing")
        }, 1000);
    };

    const handleBtnClick = () => {
        setChange(false);
    };

    useEffect(() => {
        if (change === false) {
            closeNotif();
        }
    }, [change]);

    return {change, setChange, close, setClose, handleBtnClick};
};

export default useNotification;
