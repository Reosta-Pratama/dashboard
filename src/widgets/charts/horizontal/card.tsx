"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeChartHorizontal } from './code';

const CardChartHorizontal = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="  horizontal Bar Chart  "
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeChartHorizontal active={isChecked}/>
    </BoxCard>
  )
}

export default CardChartHorizontal