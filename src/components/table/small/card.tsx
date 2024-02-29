"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/box-card'
import { CodeSmallTable } from '@/components/table/small/code';

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