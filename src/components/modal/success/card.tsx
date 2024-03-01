"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeSuccessModal } from './code';

const CardSuccessModal = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="success Modal"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeSuccessModal active={isChecked}></CodeSuccessModal>
    </BoxCard>
  )
}

export default CardSuccessModal