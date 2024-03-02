export const useTabLink = () => {
    const handleBtnClick = (dataTab: string) => {
      const btnTabElements = document.querySelectorAll('.tab-btn-link');
  
      btnTabElements.forEach((element) => {
        const elementDataTab = element.getAttribute('data-tab');
        if (elementDataTab === dataTab) {
            element.classList.remove('border-transparent');
            element.classList.add('border-primary', 'text-slate-800');
        } else {
            element.classList.remove('border-primary', 'text-slate-800');
            element.classList.add('border-transparent');
        }
      })

      const valueTabElements = document.querySelectorAll('.tab-content-link');
      
      valueTabElements.forEach((element) => {
        const elementDataTab = element.getAttribute('data-tab');
        if (elementDataTab === dataTab) {
            element.classList.remove('hidden');
            element.classList.add('flex');
        } else {
            element.classList.remove('flex');
            element.classList.add('hidden');
        }
      })
    };
  
    return {
      handleBtnClick,
    };
  };
  
  export default useTabLink;
  