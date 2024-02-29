import React from 'react'
import LinkBtn from '../../style/link-button';

interface LinkBtnPendingProps {
    title: string;
    href: string;
}

export const LinkBtnPending: React.FC<LinkBtnPendingProps> = ({ title, href })  => {
  return (
    <LinkBtn
        title={title}
        href={href}
        addClass="text-white bg-pending hover:bg-pending/90 focus:ring-pending/20"></LinkBtn>
  )
}
