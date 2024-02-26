"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeLinkBtn } from '@/components/show-code/button/code-link-button'

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