"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeStripedTable } from '@/components/show-code/table/striped-code';

const StripedTableCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Striped Rows"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeStripedTable active={isChecked}/>
    </BoxCard>
  )
}

export default StripedTableCard