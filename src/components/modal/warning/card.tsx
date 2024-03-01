"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeWarningModal } from './code';

const CardWarningModal = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="warning Modal"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeWarningModal active={isChecked}></CodeWarningModal>
    </BoxCard>
  )
}

export default CardWarningModal