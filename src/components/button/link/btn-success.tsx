import React from 'react'
import LinkBtn from '../style/link-button';

interface LinkBtnSuccessProps {
    title: string;
    href: string;
}

export const LinkBtnSuccess: React.FC<LinkBtnSuccessProps> = ({ title, href })  => {
  return (
    <LinkBtn
        title={title}
        href={href}
        addClass="text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20"></LinkBtn>
  )
}
