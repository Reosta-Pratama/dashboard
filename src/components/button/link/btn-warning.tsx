import React from 'react'
import LinkBtn from '../style/link-button';

interface LinkBtnWarningProps {
    title: string;
    href: string;
}

export const LinkBtnWarning: React.FC<LinkBtnWarningProps> = ({ title, href })  => {
  return (
    <LinkBtn
        title={title}
        href={href}
        addClass="text-slate-900 bg-warning hover:bg-warning/90 focus:ring-warning/20"></LinkBtn>
  )
}
