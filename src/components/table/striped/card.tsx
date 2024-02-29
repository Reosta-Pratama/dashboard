"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/box-card'
import { CodeStripedTable } from '@/components/table/striped/code';

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