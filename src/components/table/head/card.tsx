"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/box-card'
import { CodeHeadTable } from '@/components/table/head/code';

const HeadTableCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="table head options"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeHeadTable active={isChecked}/>
    </BoxCard>
  )
}

export default HeadTableCard