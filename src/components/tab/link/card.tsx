"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeLinkTab } from './code';

const CardLinkTab = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="link Tab"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeLinkTab active={isChecked}></CodeLinkTab>
    </BoxCard>
  )
}

export default CardLinkTab