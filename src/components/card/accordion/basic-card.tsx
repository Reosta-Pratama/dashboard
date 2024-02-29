"use client"

import React, { useState } from 'react'
import BoxCard from '../style/box-card'
import { CodeBasicAccordion } from '@/components/show-code/accordion/basic-code';

const BasicAccordionCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="basic accordion"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeBasicAccordion active={isChecked}/>
    </BoxCard>
  )
}

export default BasicAccordionCard