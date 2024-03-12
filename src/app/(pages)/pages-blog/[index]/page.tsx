"use client"

import DetailBlog from '@/pages/blog/detailBlog';
import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
    const params = useParams<{ index: string }>()
    const title = params ? "Detail Blog - " + params.index : "";

    return (
        <>
            {/* Meta Tag */}
            <title>{title}</title>
            
            
            <main className='flex flex-col gap-5'>
                <DetailBlog></DetailBlog>
                {title}
            </main>
        </>
    );
}

export default Page;
