"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeBasicTable } from '@/components/show-code/table/basic-code';

const BasicTableCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="basic table"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeBasicTable active={isChecked}/>
    </BoxCard>
  )
}

export default BasicTableCard