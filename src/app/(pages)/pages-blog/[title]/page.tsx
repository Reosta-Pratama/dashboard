"use client"

import { Card } from '@/components/card/card';
import { DummyBlog } from '@/dummys/dummy-blog';
import DetailBlog from '@/page/blog/detail/detailBlog';
import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
    const params = useParams<{ title: string }>()
    const findTitle = decodeURIComponent(params.title.replace("/%20/g", " "))
    const title = params ? "Detail Blog - " + findTitle : ""

    const data = DummyBlog.find(item => item.title.toLowerCase() == findTitle.toLowerCase())

    return (
        <>
            {/* Meta Tag */}
            <title>{title}</title>
            <meta name="description" content={data?.desc}/>
            <meta name='keywords' content={data?.title}/>
            <meta name='author' content={data?.author.createdBy}/>
            
            <main className='flex flex-col gap-5'>
                <div className='w-[60%]'>
                    <Card
                        addClass='p-5'>
                        <DetailBlog
                            cover={data?.cover}
                            title={data?.title}
                            desc={data?.desc}
                            categories={data?.categories.map(category => category.category)}
                            authors={[{
                                createdBy: data?.author.createdBy,
                                photoProfile: data?.author.photoProfile,
                                createdAt: data?.author.createdAt
                            }]}
                            totalComments={data?.totalComments}
                            totalLikes={data?.totalLikes}
                            totalViews={data?.totalViews}>
                        </DetailBlog>
                    </Card>
                </div>
            </main>
        </>
    );
}

export default Page;
