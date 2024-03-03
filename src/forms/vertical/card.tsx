"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeFormVertical } from './code';

const CardFormVertical = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title=" Vertical Form "
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeFormVertical active={isChecked}/>
    </BoxCard>
  )
}

export default CardFormVertical