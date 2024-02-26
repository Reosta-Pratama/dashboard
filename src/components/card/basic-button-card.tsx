"use client"

import React, { useState } from 'react'
import BoxCard from './box-card'
import { CodeBasicBtn } from '../show-code/code-basic-button'

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
        <div className="p-5">
            <CodeBasicBtn active={isChecked}/>
        </div>
    </BoxCard>
  )
}

export default BasicBtnCard