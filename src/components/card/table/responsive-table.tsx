"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeResponsiveTable } from '@/components/show-code/table/responsive-code';

const ResponsiveTableCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Responsive table"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeResponsiveTable active={isChecked}/>
    </BoxCard>
  )
}

export default ResponsiveTableCard