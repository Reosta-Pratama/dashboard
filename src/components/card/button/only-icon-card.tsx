"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeOnlyIconBtn } from '@/components/show-code/button/only-icon-button';

const OnlyIconBtnCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Icon Only Buttons"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeOnlyIconBtn active={isChecked}/>
    </BoxCard>
  )
}

export default OnlyIconBtnCard