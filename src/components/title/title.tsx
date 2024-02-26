import React from 'react'

interface TitleProps {
    name: string;
}

const Title: React.FC<TitleProps> = ({ name }) => {
  return (
    <h2 className='text-lg font-medium capitalize'>{name}</h2>
  )
}

export default Title