"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/box-card'
import { CodeOnlyIconBtn } from '@/components/button/only-icon/code';

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