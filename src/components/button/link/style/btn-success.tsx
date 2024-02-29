import React from 'react'
import LinkBtn from '../box';

interface LinkBtnSuccessProps {
    title: string;
    href: string;
    addClass?: string;
}

export const LinkBtnSuccess: React.FC<LinkBtnSuccessProps> = ({ title, href, addClass })  => {
  return (
    <LinkBtn
        title={title}
        href={href}
        addClass={`text-slate-900 bg-success hover:bg-success/90 focus:ring-success/20 ${addClass ?? ''}`}></LinkBtn>
  )
}
