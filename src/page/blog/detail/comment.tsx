import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import { FiMessageCircle } from 'react-icons/fi'

const CommentBlog = () => {
  return (
    <div className='flex flex-col gap-5'>
        <h3 className='text-lg font-medium'>Response</h3>

        <div className="relative">
            <div className="absolute z-[1] top-1/2 left-6 -translate-y-1/2
                text-xl">
                <FiMessageCircle />
            </div>

            <textarea 
                name="comment" 
                id="comment" 
                placeholder='Post a comment...'
                rows={1}
                className='w-full bg-slate-100 resize-none text-sm rounded-md pl-16 pr-3 py-6
                        border border-solid border-slate-200
                        transition-all duration-200 ease-in-out
                        focus-visible:outline-none focus:ring-4 focus:ring-primary/20'/>
        </div>

        <ul className='flex flex-col gap-3'>
            {
                Array.from({length: 3}, (value, index) => (
                   <li
                        key={index}
                        className='flex items-start gap-5 pb-5 last:pb-0
                            border-b border-solid border-slate-200 last:border-transparent'>
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <Image
                                src={"/img/blog/profile-1.jpg"}
                                alt={`User-${index}`}
                                width={100}
                                height={100}
                                loading='lazy'
                                layout='responsive'
                                objectFit='cover'>
                            </Image>
                        </div>

                        <div className="flex flex-1 flex-col gap-2">
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <h3 className='font-medium capitalize'>Sylvester Stallone </h3>
                                    <span className='text-sm text-slate-500'>35 minutes ago</span>
                                </div>

                                <Link
                                    href='#comment'
                                    className='text-slate-500 text-xs'>
                                        Reply
                                </Link>
                            </div>

                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                roots in a piece of classical Latin literature from 45 BC, making it over 20</p>
                        </div>
                   </li> 
                ))
            }
        </ul>
    </div>
  )
}

export default CommentBlog