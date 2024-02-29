"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/box-card'
import { CodeIconBtn } from '@/components/button/icon/code';

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