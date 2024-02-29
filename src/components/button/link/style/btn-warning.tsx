import React from 'react'
import LinkBtn from '../box';

interface LinkBtnWarningProps {
    title: string;
    href: string;
    addClass?: string;
}

export const LinkBtnWarning: React.FC<LinkBtnWarningProps> = ({ title, href, addClass })  => {
  return (
    <LinkBtn
        title={title}
        href={href}
        addClass={`text-slate-900 bg-warning hover:bg-warning/90 focus:ring-warning/20 ${addClass ?? ''}`}></LinkBtn>
  )
}
