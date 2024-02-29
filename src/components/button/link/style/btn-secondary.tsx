import React from 'react'
import LinkBtn from '../box';

interface LinkBtnSecondaryProps {
    title: string;
    href: string;
    addClass?: string;
}

export const LinkBtnSecondary: React.FC<LinkBtnSecondaryProps> = ({ title, href, addClass })  => {
  return (
    <LinkBtn
        title={title}
        href={href}
        addClass={`text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary ${addClass ?? ''}`}></LinkBtn>
  )
}
