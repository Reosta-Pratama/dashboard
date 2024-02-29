"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { HeadFootDropdownCode } from '@/components/dropdown/header-footer/code';

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