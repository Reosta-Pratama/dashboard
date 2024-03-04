"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeFileUploadMultiple } from './code';

const CardFileUploadMultiple = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title=" multiple File Upload "
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeFileUploadMultiple active={isChecked}/>
    </BoxCard>
  )
}

export default CardFileUploadMultiple