import React from 'react'
import LinkBtn from '../box';

interface LinkBtnDarkProps {
    title: string;
    href: string;
    addClass?: string;
}

export const LinkBtnDark: React.FC<LinkBtnDarkProps> = ({ title, href, addClass })  => {
  return (
    <LinkBtn
        title={title}
        href={href}
        addClass={`text-white bg-dark hover:bg-dark/90 focus:ring-dark/20 ${addClass ?? ''}`}></LinkBtn>
  )
}
