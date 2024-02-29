"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/box-card'
import { CodeRoundedBtn } from '@/components/button/rounded/code';

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