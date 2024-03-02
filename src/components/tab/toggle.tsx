export const useTab = () => {
    const handleBtnClick = (dataTab: string) => {
      const btnTabElements = document.querySelectorAll('.tab-btn');
  
      btnTabElements.forEach((element) => {
        const elementDataTab = element.getAttribute('data-tab');
        if (elementDataTab === dataTab) {
            element.classList.remove('border-t-0', 'border-l-0', 'border-r-0');
            element.classList.add('border-b-0', 'text-slate-800');
        } else {
            element.classList.remove('border-b-0', 'text-slate-800');
            element.classList.add('border-t-0', 'border-l-0', 'border-r-0');
        }
      })

      const valueTabElements = document.querySelectorAll('.tab-content');
      console.log(valueTabElements)
      
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
  
  export default useTab;
  