"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { IconDropdownCode } from '@/components/dropdown/icon/code';

const CardIconDropdown = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="icon dropdown"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <IconDropdownCode active={isChecked}></IconDropdownCode>
    </BoxCard>
  )
}

export default CardIconDropdown