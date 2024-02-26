"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeRoundedBtn } from '@/components/show-code/button/code-rounded-button';

const RoundedBtnCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="rounded buttons"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeRoundedBtn active={isChecked}/>
    </BoxCard>
  )
}

export default RoundedBtnCard