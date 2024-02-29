"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { HeadIconDropdownCode } from '@/components/dropdown/header-icon/code';

const CardHeadIconDropdown = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Header & icon dropdown"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <HeadIconDropdownCode active={isChecked}></HeadIconDropdownCode>
    </BoxCard>
  )
}

export default CardHeadIconDropdown