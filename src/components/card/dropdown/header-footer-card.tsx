"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/style/box-card';
import { HeadFootDropdownCode } from '@/components/show-code/dropdown/header-footer-code';

const CardHeadFootDropdown = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Header & Footer dropdown"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <HeadFootDropdownCode active={isChecked}></HeadFootDropdownCode>
    </BoxCard>
  )
}

export default CardHeadFootDropdown