"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeChartDonut } from './code';

const CardChartDonut = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="  donut Bar Chart  "
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeChartDonut active={isChecked}/>
    </BoxCard>
  )
}

export default CardChartDonut