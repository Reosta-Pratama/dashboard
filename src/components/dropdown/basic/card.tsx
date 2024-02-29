"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { BasicDropdownCode } from './code';

const CardBasicDropdown = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="basic dropdown"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <BasicDropdownCode active={isChecked}></BasicDropdownCode>
    </BoxCard>
  )
}

export default CardBasicDropdown