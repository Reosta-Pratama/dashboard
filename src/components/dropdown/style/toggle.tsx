import { useEffect } from 'react';

export const useDropdown = () => {
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

  // Menutup dropdown jika klik dilakukan di luar elemen .dropdown
  const handleClickOutside = (event: MouseEvent) => {
    const dropdownElements = document.querySelectorAll('.dropdown');

    dropdownElements.forEach((element) => {
      if (!element.contains(event.target as Node)) {
        element.classList.remove('translate-y-10', 'opacity-100', 'visible');
        element.classList.add('translate-y-20', 'opacity-0', 'invisible');
      }
    });
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    handleBtnClick,
  };
};
