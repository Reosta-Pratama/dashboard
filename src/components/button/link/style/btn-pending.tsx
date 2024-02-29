import React from 'react'
import LinkBtn from '../box';

interface LinkBtnPendingProps {
    title: string;
    href: string;
    addClass?: string;
}

export const LinkBtnPending: React.FC<LinkBtnPendingProps> = ({ title, href, addClass })  => {
  return (
    <LinkBtn
        title={title}
        href={href}
        addClass={`text-white bg-pending hover:bg-pending/90 focus:ring-pending/20 ${addClass ?? ''}`}></LinkBtn>
  )
}
