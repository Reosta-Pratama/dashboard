import React from 'react';
import Link from 'next/link';
import DateFormat from '@/helpers/convert-date-YMD';
import EditDelete from './edit-delete';
import BookShare from './book-share';
import NumberFormat from '@/helpers/convert-zero';
import Image from 'next/legacy/image';

interface AuthorProps {
  createdBy: string;
  photoProfile: string;
  createdAt: string;
}

interface BlogProps {
  index: number;
  cover: string;
  title: string;
  desc: string;
  categories?: string[]; 
  authors?: AuthorProps[]; 
  totalComments: number;
  totalViews: number;
  totalLikes: number;
}

const Blog: React.FC<BlogProps> = ({
  index,
  cover,
  title,
  desc,
  categories = [], 
  authors = [], 
  totalComments,
  totalLikes,
  totalViews,
}) => {
  return (
    <div className="bg-white flex flex-col shadow-card rounded-[.6rem]">
        <div className="relative rounded-t-[.6rem] overflow-hidden">
            {/* Image Cover */}
            <Image
                src={cover}
                alt={`${title}-${index}`}
                loading="lazy"
                layout="responsive"
                width={100}
                height={60}
                objectFit="cover"
            />

            <div className="absolute z-[1] inset-0 bg-linear-black"></div>

            <div className="absolute z-[2] top-6 left-0 w-full px-5">
                <div className="flex justify-between items-center">
                    {/* Author */}
                    {authors?.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <Image
                                    src={item.photoProfile}
                                    alt={`${item.createdBy}`}
                                    loading="lazy"
                                    priority={false}
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    objectFit="cover"
                                    objectPosition="center"
                                />
                            </div>

                            <div className="flex flex-col flex-1 gap-[2px] text-white">
                                <h3 className="font-medium capitalize">{item.createdBy}</h3>
                                <span className="text-xs">
                                    {/* 2010-03-10 (year, month, date) */}
                                    <DateFormat value={item.createdAt} />
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Edit & Delete */}
                    <EditDelete index={index} editLink="" deleteLink="" />
                </div>
            </div>

            <div className="absolute z-[2] bottom-6 left-0 w-full px-5">
                <div className="flex flex-col gap-3 text-white">
                    <ul className="w-fit bg-white/20 flex gap-1 rounded px-2 py-1 capitalize">
                        {categories?.map((item, index) => (
                            <React.Fragment key={index}>
                                <li>{item}</li>
                                {index < categories.length - 2 && <span>, </span>}
                                {index === categories.length - 2 && categories.length > 1 && <span> & </span>}
                            </React.Fragment>
                        ))}
                    </ul>

                    {/* Title */}
                    <Link
                        href={`/pages-blog/${title}`}
                        className="text-xl font-medium duration-300 ease-linear hover:text-success"
                        >
                        <h2>{title}</h2>
                    </Link>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-5 py-5">
            {/* Description */}
            <p className="text-slate-600 px-5">{desc}</p>

            {/* Bookmark Sharing Download */}
            <BookShare 
                border={true}
                index={index} 
                bookmarkLink="" 
                shareLink="" 
                downloadLink="" 
            />

            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center px-5">
                    <div className="flex items-center gap-2">
                        <span>
                            Comment:
                            <strong className="font-medium"><NumberFormat value={totalComments}></NumberFormat></strong>
                        </span>
                        <span>
                            Views:
                            <strong className="font-medium"><NumberFormat value={totalViews}></NumberFormat></strong>
                        </span>
                    </div>

                    <span>
                        Likes:
                        <strong className="font-medium"><NumberFormat value={totalLikes}></NumberFormat></strong>
                    </span>
                </div>

                <div className="w-full h-8 flex items-center px-5 gap-3">
                    

                    {authors?.map((item, index) => (
                        <div key={index}
                            className="w-8 h-full rounded-full overflow-hidden">
                            <Image
                                src={item.photoProfile}
                                alt={item.createdAt}
                                loading="lazy"
                                priority={false}
                                layout="responsive"
                                width={100}
                                height={100}
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                    ))}

                    <input
                        id="comment"
                        type="text"
                        name="comment"
                        placeholder="Post a comment..."
                        className="flex flex-1 shadow-sm rounded-full px-3 py-2 
                            bg-slate-100 
                            transition-all duration-200 ease-in-out 
                            focus-visible:outline-none focus:ring-4 focus:ring-primary/20 text-sm"
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Blog;
