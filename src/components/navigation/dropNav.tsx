// DropNav.tsx
import Link from 'next/link';
import React from 'react';
import { FiActivity } from 'react-icons/fi';

interface DropNavProps {
    active?: string | null;
    data?: Array<Array<string>> | null;
}

const DropNav: React.FC<DropNavProps> = ({ active, data }) => {
  if (!data || data.length === 0) {
    return null; 
  }

  return (
    <ul className="bg-[#0000001a] flex flex-col rounded-lg gap-1">
      {data.map((item, index) => (
        <li key={index}>
          <Link href={item[1]}
            className='h-12 flex items-center rounded-full pl-5 gap-3 text-[#ffffffb3]'>
            <span className='text-xl'><FiActivity /></span>
            <span className='flex flex-1 items-center capitalize'>
                {item[0]}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropNav;
