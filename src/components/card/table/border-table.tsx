"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeBorderTable } from '@/components/show-code/table/border-code';

const BorderTableCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="bordered table"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeBorderTable active={isChecked}/>
    </BoxCard>
  )
}

export default BorderTableCard