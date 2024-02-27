"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeSmallTable } from '@/components/show-code/table/small-code';

const SmallTableCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="small table"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeSmallTable active={isChecked}/>
    </BoxCard>
  )
}

export default SmallTableCard