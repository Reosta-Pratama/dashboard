"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/style/box-card';
import { ScrollDropdownCode } from '@/components/show-code/dropdown/scroll-code';

const CardScrollDropdown = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="scrolled dropdown"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <ScrollDropdownCode active={isChecked}></ScrollDropdownCode>
    </BoxCard>
  )
}

export default CardScrollDropdown