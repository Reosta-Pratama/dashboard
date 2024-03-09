import { useEffect, useRef, useState } from 'react';

export const useLinkDrop = () => {
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.scrollHeight);
    } else {
      setDropdownHeight(null);
    }
  }, []);

  const toggleDropdown = (dataNav: string) => {
    setisDropdownOpen(!isDropdownOpen)
    const navElements = document.querySelectorAll<HTMLElement>('.dropdown-link')

    navElements.forEach((element) => {
      const elementDataOrder = element.getAttribute('data-nav');
      if (elementDataOrder === dataNav) {
        if (element.style.height !== `${dropdownHeight}px`) {
          element.style.height = `${dropdownHeight}px`;
        } else {
          element.style.height = '0px';
        }
      } else {
        element.style.height = '0px';
      }
    })
  }

  const iconStyle = {
    transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
    transition: 'transform 0.3s ease',
  }

  return {
    isDropdownOpen,
    dropdownHeight,
    dropdownRef,
    toggleDropdown,
    iconStyle
  };
};
