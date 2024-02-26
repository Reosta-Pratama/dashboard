"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeHeadTable } from '@/components/show-code/table/head-code';

const HeadTableCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="basic table"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeHeadTable active={isChecked}/>
    </BoxCard>
  )
}

export default HeadTableCard