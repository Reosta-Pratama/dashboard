"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeChartPie } from './code';

const CardChartPie = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="  donut Bar Chart  "
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeChartPie active={isChecked}/>
    </BoxCard>
  )
}

export default CardChartPie