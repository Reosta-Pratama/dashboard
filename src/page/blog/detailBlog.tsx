import DateFormat from '@/helpers/convert-date-YMD';
import Image from 'next/legacy/image';
import React from 'react'
import BookShare from './book-share';
import AuthorShare from './author-share';

interface AuthorProps {
    createdBy?: string;
    photoProfile?: string;
    createdAt?: string;
}

interface DetailBlogProps {
    cover?: string;
    title?: string;
    desc?: string;
    categories?: string[];
    authors?: AuthorProps[];
    totalComments?: number;
    totalViews?: number;
    totalLikes?: number;
}

const DetailBlog: React.FC<DetailBlogProps> = ({
    cover,
    title,
    desc,
    categories = [],
    authors = [],
    totalComments,
    totalLikes,
    totalViews
}) => {
    return (
      <div className='flex flex-col gap-6'>
          <div className="flex flex-col gap-3">
              <h2 className='text-2xl font-medium'>{title}</h2>

              <ul
                  className='flex items-center gap-2
                    text-sm text-slate-600'>
                  {
                    authors?.map((item, index) => (
                      <li key={index}>
                          {item.createdAt &&
                          <DateFormat value={item.createdAt}/>}
                      </li>
                    ))
                  }
                  <li className=''>•</li>
                  <li className='flex items-center gap-1 text-primary'>
                    {
                      categories?.map((item, index) => (
                        <React.Fragment key={index}>
                            <div>{item}</div>
                            {index < categories.length - 2 && <span>, </span>}
                            {index === categories.length - 2 && categories.length > 1 && <span> & </span>}
                        </React.Fragment>
                      ))
                    }
                  </li>
              </ul>
          </div>

          <div className='rounded-md overflow-hidden pointer-events-none'>
            <Image
              src={cover ? cover : ""}
              alt={title}
              width={100}
              height={60}
              loading='lazy'
              layout='responsive'
              objectFit='cover'>
            </Image>
          </div>

          {/* Bookmark Sharing Download */}
          <BookShare 
            border={false}
            index={title ? title : ""} 
            bookmarkLink="" 
            shareLink="" 
            downloadLink=""
            totalComments={totalComments}
            totalViews={totalViews}
            totalLikes={totalLikes}/>

          <div className='flex flex-col gap-5 text-justify leading-[1.625] indent-[30px]'>
            {
              Array.from({length: 3}, (value, index) => (
                <p key={index}>It is a long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The point of using Lorem
                  Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use Lorem Ipsum as
                  their default model text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour and the like).</p> 
              ))
            }    
          </div>

          {
            authors?.map((item, index) => (
              <AuthorShare
                key={index}
                createdBy={item.createdBy}
                photoProfile={item.photoProfile}>
              </AuthorShare>
            ))
          }
      </div> 
    )
}

export default DetailBlog