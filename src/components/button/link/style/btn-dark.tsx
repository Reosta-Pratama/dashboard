import React from 'react'
import LinkBtn from '../../style/link-button';

interface LinkBtnDarkProps {
    title: string;
    href: string;
}

export const LinkBtnDark: React.FC<LinkBtnDarkProps> = ({ title, href })  => {
  return (
    <LinkBtn
        title={title}
        href={href}
        addClass="text-white bg-dark hover:bg-dark/90 focus:ring-dark/20"></LinkBtn>
  )
}
