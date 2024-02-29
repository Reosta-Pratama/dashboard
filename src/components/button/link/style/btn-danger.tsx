import React from 'react'
import LinkBtn from '../box';

interface LinkBtnDangerProps {
    title: string;
    href: string;
    addClass?: string;
}

export const LinkBtnDanger: React.FC<LinkBtnDangerProps> = ({ title, href, addClass })  => {
  return (
    <LinkBtn
        title={title}
        href={href}
        addClass={`text-white bg-danger hover:bg-danger/90 focus:ring-danger/20 ${addClass ?? ''}`}></LinkBtn>
  )
}
