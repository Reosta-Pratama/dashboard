import React from 'react'
import LinkBtn from '../box';

interface LinkBtnPrimaryProps {
    title: string;
    href: string;
    addClass?: string;
}

export const LinkBtnPrimary: React.FC<LinkBtnPrimaryProps> = ({ title, href, addClass })  => {
  return (
    <LinkBtn
        title={title}
        href={href}
        addClass={`text-white bg-primary hover:bg-primary/90 focus:ring-primary/20 ${addClass ?? ''}`}></LinkBtn>
  )
}
