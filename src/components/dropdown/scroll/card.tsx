"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { ScrollDropdownCode } from '@/components/dropdown/scroll/code';

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