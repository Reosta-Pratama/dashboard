import React from 'react'
import LinkBtn from '../style/link-button';

interface LinkBtnSecondaryProps {
    title: string;
    href: string;
}

export const LinkBtnSecondary: React.FC<LinkBtnSecondaryProps> = ({ title, href })  => {
  return (
    <LinkBtn
        title={title}
        href={href}
        addClass="text-slate-500 bg-secondary hover:bg-secondary/70 focus:ring-secondary"></LinkBtn>
  )
}
