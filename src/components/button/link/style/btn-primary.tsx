import React from 'react'
import LinkBtn from '../../style/link-button';

interface LinkBtnPrimaryProps {
    title: string;
    href: string;
}

export const LinkBtnPrimary: React.FC<LinkBtnPrimaryProps> = ({ title, href })  => {
  return (
    <LinkBtn
        title={title}
        href={href}
        addClass="text-white bg-primary hover:bg-primary/90 focus:ring-primary/20"></LinkBtn>
  )
}
