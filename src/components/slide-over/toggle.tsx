export const useSlideOver = () => {
  const handleBtnClick = (dataOrder: string) => {
    const slideElements = document.querySelectorAll('.slideover');

    slideElements.forEach((element) => {
        const elementDataOrder = element.getAttribute('data-order');
        if (elementDataOrder === dataOrder) {
            if (!element.classList.contains('visible')) {
              element.classList.remove('opacity-0', 'invisible');
              element.classList.add('opacity-100', 'visible');

              const lastChildElement = element.lastChild as HTMLElement;
              lastChildElement.classList.remove('translate-x-60');
              lastChildElement.classList.add('translate-x-0');
            } else {
              element.classList.remove('opacity-100', 'visible');
              element.classList.add('opacity-0', 'invisible');

              const lastChildElement = element.lastChild as HTMLElement;
              lastChildElement.classList.remove('translate-x-0');
              lastChildElement.classList.add('translate-x-60');
            }
          } else {
            element.classList.remove('opacity-100', 'visible');
            element.classList.add('opacity-0', 'invisible');

            const lastChildElement = element.lastChild as HTMLElement;
            lastChildElement.classList.remove('translate-x-0');
            lastChildElement.classList.add('translate-x-60');
          }
    })
  };

  return {
    handleBtnClick,
  };
};

export default useSlideOver;
