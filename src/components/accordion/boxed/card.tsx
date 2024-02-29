"use client"

import React, { useState } from 'react'
import BoxCard from '../../card/box-card'
import { CodeBoxAccordion } from './code';

const BoxAccordionCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="boxed accordion"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeBoxAccordion active={isChecked}/>
    </BoxCard>
  )
}

export default BoxAccordionCard