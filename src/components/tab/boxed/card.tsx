"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeBoxedTab } from './code';

const CardBoxedTab = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="boxed Tab"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeBoxedTab active={isChecked}></CodeBoxedTab>
    </BoxCard>
  )
}

export default CardBoxedTab