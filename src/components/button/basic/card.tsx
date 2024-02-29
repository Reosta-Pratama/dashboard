"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/style/box-card'
import { CodeBasicBtn } from '@/components/button/basic/code';

const BasicBtnCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="basic buttons"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeBasicBtn active={isChecked}/>
    </BoxCard>
  )
}

export default BasicBtnCard