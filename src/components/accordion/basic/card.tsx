"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/box-card'
import { CodeBasicAccordion } from '@/components/accordion/basic/code';

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