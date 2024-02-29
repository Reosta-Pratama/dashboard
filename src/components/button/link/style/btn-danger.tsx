import React from 'react'
import LinkBtn from '../../style/link-button';

interface LinkBtnDangerProps {
    title: string;
    href: string;
}

export const LinkBtnDanger: React.FC<LinkBtnDangerProps> = ({ title, href })  => {
  return (
    <LinkBtn
        title={title}
        href={href}
        addClass="text-white bg-danger hover:bg-danger/90 focus:ring-danger/20"></LinkBtn>
  )
}
