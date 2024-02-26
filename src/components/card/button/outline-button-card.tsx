"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeOutlineBtn } from '../../show-code/button/code-outline-button'

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
        <div className="p-5">
            <CodeOutlineBtn active={isChecked}/>
        </div>
    </BoxCard>
  )
}

export default OutlineBtnCard