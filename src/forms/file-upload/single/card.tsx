"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeFileUpload } from './code';

const CardFileUpload = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title=" single File Upload "
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeFileUpload active={isChecked}/>
    </BoxCard>
  )
}

export default CardFileUpload