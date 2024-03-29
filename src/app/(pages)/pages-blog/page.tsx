import Title from '@/components/title/title';
import ContainerBlog from '@/page/blog/container';
import OptionBlog from '@/page/blog/option';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Blog",
    description: "Generated by create next app"
};

const page = () => {
    return (
        <main className='flex flex-col gap-5'>
            <div className="flex justify-between items-center">
                <Title name="Blog layout"></Title>
                <OptionBlog
                    addLink=''
                    shareLink=''
                    downloadLink=''>
                </OptionBlog>
            </div>

            <ContainerBlog></ContainerBlog>
        </main>
    );
}

export default page