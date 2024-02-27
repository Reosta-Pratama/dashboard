"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeHoverTable } from '@/components/show-code/table/hover-code';

const HoverTableCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Hoverable table"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeHoverTable active={isChecked}/>
    </BoxCard>
  )
}

export default HoverTableCard