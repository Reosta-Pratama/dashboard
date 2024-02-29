import { useState } from 'react';

export const useDropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const handleBtnClick = (dataOrder: string) => {
    const dropdownElements = document.querySelectorAll('.dropdown');

    dropdownElements.forEach((element) => {
      const elementDataOrder = element.getAttribute('data-order');

      if (elementDataOrder === dataOrder) {
        if (!element.classList.contains('visible')) {
          element.classList.remove('translate-y-20', 'opacity-0', 'invisible');
          element.classList.add('translate-y-10', 'opacity-100', 'visible');
        } else {
          element.classList.remove('translate-y-10', 'opacity-100', 'visible');
          element.classList.add('translate-y-20', 'opacity-0', 'invisible');
        }
      } else {
        if (element.classList.contains('visible')) {
          element.classList.remove('translate-y-10', 'opacity-100', 'visible');
          element.classList.add('translate-y-20', 'opacity-0', 'invisible');
        }
      }
    });
  };

  return {
    isActive,
    handleBtnClick,
  };
};
