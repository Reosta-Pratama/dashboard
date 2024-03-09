import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { FiActivity } from 'react-icons/fi';

interface DropNavProps {
  active: boolean;
  data?: Array<Array<string>> | null;
}

const DropNav: React.FC<DropNavProps> = ({ active, data }) => {
  const [dropdownHeight, setDropdownHeight] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname()

  useEffect(() => {
    if (dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.scrollHeight);
    } else {
      setDropdownHeight(null);
    }
  }, []);

  
  return (
    <ul
        ref={dropdownRef}
        className={`dropdown-link 
          bg-[#0000001a] flex flex-col rounded-lg gap-1  
            duration-300 ease-in-out overflow-hidden`}
        style={{ height: active ? `${dropdownHeight}px` : '0'}}>
          {
              data
                  ?.map((item, index) => (
                  <li key={index}>
                      <Link href={item[1]} 
                        className={`h-12 flex items-center rounded-full pl-5 gap-3
                          ${pathname === item[1] ? "text-white" : "text-[#ffffffb3]"}`}>
                          <span className='text-xl'><FiActivity/></span>
                          <span className='flex flex-1 items-center capitalize'>
                              {item[0]}
                          </span>
                      </Link>
                  </li>
              ))
          }
    </ul>
  );
};

export default DropNav;
