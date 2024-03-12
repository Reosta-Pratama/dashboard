import BtnBlog from '@/components/button/link-blog/button';
import { Tooltip } from '@/components/tooltip/basic/components/box';
import { ValueTooltip } from '@/components/tooltip/basic/components/value';
import useTooltipBasic from '@/components/tooltip/basic/toggle';
import Image from 'next/legacy/image';
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

interface AuthorShareProps {
    addClass?: string;
    createdBy?: string;
    photoProfile?: string;
}

const AuthorShare: React.FC<AuthorShareProps> = ({addClass, createdBy, photoProfile}) => {
    const { isActive, handleHover, handleLeave } = useTooltipBasic()

  return (
    <div className='flex justify-between items-center'>
        <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                    src={photoProfile ? photoProfile : ""}
                    alt={createdBy}
                    width={100}
                    height={100}
                    loading='lazy'
                    layout='responsive'
                    objectFit='cover'>
                </Image>
            </div>

            <div className="flex flex-col">
                <div className="font-medium">
                    {createdBy}
                    <span className='font-normal'>, Author</span>
                </div>
                <span className='text-slate-500'>Senior Frontend Engineer</span>
            </div>
        </div>

        <div className="flex items-center gap-3">
            <p>Share this post:</p>
            <div className="flex items-center gap-2">
                <Tooltip addClass='flex'>
                    <BtnBlog 
                        href=''
                        onMouseEnter={() => handleHover(`facebook-${createdBy}`)}
                        onMouseLeave={() => handleLeave(`facebook-${createdBy}`)}
                        addClass='w-10 h-10 text-slate-400 hover:scale-105 hover:shadow-blogBtn'>
                            <FaFacebookF />
                    </BtnBlog>

                    <ValueTooltip addClass='px-5 py-2' bgColor='#00293B' active={isActive(`facebook-${createdBy}`)}>
                        <span className='text-white capitalize'>facebook</span>
                    </ValueTooltip>
                </Tooltip>

                <Tooltip addClass='flex'>
                    <BtnBlog 
                        href=''
                        onMouseEnter={() => handleHover(`X-${createdBy}`)}
                        onMouseLeave={() => handleLeave(`X-${createdBy}`)}
                        addClass='w-10 h-10 text-slate-400 hover:scale-105 hover:shadow-blogBtn'>
                            <FaXTwitter />
                    </BtnBlog>

                    <ValueTooltip addClass='px-5 py-2' bgColor='#00293B' active={isActive(`X-${createdBy}`)}>
                        <span className='text-white capitalize'>X</span>
                    </ValueTooltip>
                </Tooltip>

                <Tooltip addClass='flex'>
                    <BtnBlog 
                        href=''
                        onMouseEnter={() => handleHover(`linked-${createdBy}`)}
                        onMouseLeave={() => handleLeave(`linked-${createdBy}`)}
                        addClass='w-10 h-10 text-slate-400 hover:scale-105 hover:shadow-blogBtn'>
                            <FaLinkedinIn />
                    </BtnBlog>

                    <ValueTooltip addClass='px-5 py-2' bgColor='#00293B' active={isActive(`linked-${createdBy}`)}>
                        <span className='text-white capitalize'>linked-in</span>
                    </ValueTooltip>
                </Tooltip>
            </div>
        </div>
    </div>
  )
}

export default AuthorShare