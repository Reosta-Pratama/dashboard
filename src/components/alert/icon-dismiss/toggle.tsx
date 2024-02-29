import { useState } from 'react';

export const useAlert = () => {
  const [isActive, setIsActive] = useState(false);

  const handleBtnClick = () => {
    setIsActive(!isActive);
  };

  return {
    isActive,
    handleBtnClick,
  };
};
