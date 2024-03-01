"use client"

import React, { useState } from 'react'
import BoxCard from '@/components/card/box-card';
import { CodeBasicNotif } from './code';

const CardBasicNotif = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <BoxCard 
        title="Basic Notification"
        isChecked={isChecked} 
        onCheckboxChange={handleCheckboxChange}>
        <CodeBasicNotif active={isChecked}></CodeBasicNotif>
    </BoxCard>
  )
}

export default CardBasicNotif