import { useState } from 'react';

export const useAccordion = () => {
  const handleBtnClick = (index: number) => {
    const accordionElements = document.querySelectorAll<HTMLElement>('.accordion');
    accordionElements.forEach((element) => {
      const elementDataOrder = element.getAttribute('data-order');
      let height = '';

      if (elementDataOrder === String(index)) {
        if (!element.classList.contains('visible')) {
          height = element.scrollHeight + 'px';
          element.style.height = height;

          element.classList.remove('mt-0', 'collapse');
          element.classList.add('mt-3', 'visible');

        } else {
          height = '0px'; 
          element.style.height = height;

          element.classList.remove('mt-3', 'visible');
          element.classList.add('mt-0', 'collapse');
        }
      } else {
        height = '0px';
        element.style.height = height;

        element.classList.remove('mt-3', 'visible');
        element.classList.add('mt-0', 'collapse');
      }
    });

    const buttonAccordion = document.querySelectorAll('.btnAccordion');
    buttonAccordion.forEach((button) => {
      const elementDataOrder = button.getAttribute('data-order');

      if (elementDataOrder === String(index)) {
        if (!button.classList.contains('text-primary')) {
          button.classList.add('text-primary');
        } else {
          button.classList.remove('text-primary');
        }
      } else {
        button.classList.remove('text-primary');
      }
    });
  };

  return {
    handleBtnClick,
  };
};

export default useAccordion;
