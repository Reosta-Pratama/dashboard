"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeRowTable } from '@/components/show-code/table/row-code';

const RowTableCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Table Row States"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeRowTable active={isChecked}/>
    </BoxCard>
  )
}

export default RowTableCard