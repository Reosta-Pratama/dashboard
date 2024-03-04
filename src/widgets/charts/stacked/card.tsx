"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeChartStacked } from './code';

const CardChartStacked = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="  stacked Bar Chart  "
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeChartStacked active={isChecked}/>
    </BoxCard>
  )
}

export default CardChartStacked