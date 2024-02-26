"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeSizeBtn } from '@/components/show-code/button/code-size-button'

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