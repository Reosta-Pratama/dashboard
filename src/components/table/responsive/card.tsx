"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/box-card'
import { CodeResponsiveTable } from '@/components/table/responsive/code';

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