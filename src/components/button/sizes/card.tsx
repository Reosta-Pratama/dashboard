"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/box-card'
import { CodeSizeBtn } from '@/components/button/sizes/code'

const SizeBtnCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="buttons sizes"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeSizeBtn active={isChecked}/>
    </BoxCard>
  )
}

export default SizeBtnCard