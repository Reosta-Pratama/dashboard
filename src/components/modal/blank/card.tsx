"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeBlankModal } from './code';

const CardBlankModal = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Blank Modal"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeBlankModal active={isChecked}></CodeBlankModal>
    </BoxCard>
  )
}

export default CardBlankModal