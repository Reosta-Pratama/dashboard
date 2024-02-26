"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeIconBtn } from '@/components/show-code/button/code-icon-button';

const IconBtnCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Icon Buttons"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeIconBtn active={isChecked}/>
    </BoxCard>
  )
}

export default IconBtnCard