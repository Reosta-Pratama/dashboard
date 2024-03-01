"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeDeleteModal } from './code';

const CardDeleteModal = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="delete Modal"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeDeleteModal active={isChecked}></CodeDeleteModal>
    </BoxCard>
  )
}

export default CardDeleteModal