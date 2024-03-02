export const useTabBoxed = () => {
    const handleBtnClick = (dataTab: string) => {
      const btnTabElements = document.querySelectorAll('.tab-btn-boxed');
  
      btnTabElements.forEach((element) => {
        const elementDataTab = element.getAttribute('data-tab');
        if (elementDataTab === dataTab) {
            element.classList.remove('bg-white', 'text-slate-800');
            element.classList.add('bg-primary', 'text-white');
        } else {
            element.classList.remove('bg-primary', 'text-white');
            element.classList.add('bg-white', 'text-slate-800');
        }
      })

      const valueTabElements = document.querySelectorAll('.tab-content-boxed');
      
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
  
  export default useTabBoxed;
  