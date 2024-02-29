"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/box-card'
import { CodeLinkBtn } from '@/components/button/link/code'

const LinkBtnCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Working with Links"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeLinkBtn active={isChecked}/>
    </BoxCard>
  )
}

export default LinkBtnCard