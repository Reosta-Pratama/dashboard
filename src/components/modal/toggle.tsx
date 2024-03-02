export const useModal = () => {
  const handleBtnClick = (dataOrder: string) => {
    const modalElements = document.querySelectorAll('.modal');

    modalElements.forEach((element) => {
      const elementDataOrder = element.getAttribute('data-order');

      if (elementDataOrder === dataOrder) {
        if (!element.classList.contains('visible')) {
          element.classList.remove('opacity-0', 'invisible');
          element.classList.add('opacity-100', 'visible');

          const lastChildElement = element.lastChild as HTMLElement;
          lastChildElement.classList.remove('mt-0');
          lastChildElement.classList.add('mt-16');
        } else {
          element.classList.remove('opacity-100', 'visible');
          element.classList.add('opacity-0', 'invisible');

          const lastChildElement = element.lastChild as HTMLElement;
          lastChildElement.classList.remove('mt-16');
          lastChildElement.classList.add('mt-0');
        }
      } else {
        element.classList.remove('opacity-100', 'visible');
        element.classList.add('opacity-0', 'invisible');

        const lastChildElement = element.lastChild as HTMLElement;
        lastChildElement.classList.remove('mt-16');
        lastChildElement.classList.add('mt-0');
      }
    });
  };

  return {
    handleBtnClick,
  };
};

export default useModal;
