"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeBasicBtn } from '../../show-code/button/code-basic-button'

const SizeBtnCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="buttons sizes"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <div className="p-5">
            <CodeBasicBtn active={isChecked}/>
        </div>
    </BoxCard>
  )
}

export default SizeBtnCard