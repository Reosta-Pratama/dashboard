"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeLabelProgress } from './code';

const CardLabelProgress = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title=" Progressbar with Label "
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeLabelProgress active={isChecked}></CodeLabelProgress>
    </BoxCard>
  )
}

export default CardLabelProgress