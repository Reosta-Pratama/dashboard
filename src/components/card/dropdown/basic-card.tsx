"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/style/box-card';
import { BasicDropdown } from '../../show-code/dropdown/basic-code';

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
        <BasicDropdown active={isChecked}></BasicDropdown>
    </BoxCard>
  )
}

export default CardBasicDropdown