"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/style/box-card'
import { CodeSoftBtn } from '@/components/button/soft/code';

const SoftBtnCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Soft Color Buttons"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeSoftBtn active={isChecked}/>
    </BoxCard>
  )
}

export default SoftBtnCard