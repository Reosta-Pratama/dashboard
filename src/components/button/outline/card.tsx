"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/box-card'
import { CodeOutlineBtn } from './code'

const OutlineBtnCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="outline buttons"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
      <CodeOutlineBtn active={isChecked}/>
    </BoxCard>
  )
}

export default OutlineBtnCard