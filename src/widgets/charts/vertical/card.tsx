"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeChartVertical } from './code';

const CardChartVertical = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="  Vertical Bar Chart  "
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeChartVertical active={isChecked}/>
    </BoxCard>
  )
}

export default CardChartVertical