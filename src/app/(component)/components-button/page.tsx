import BasicBtnCard from '@/components/card/basic-button-card';
import OutlineBtnCard from '@/components/card/outline-button-card';
import Title from '@/components/title';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Regular button",
    description: "Generated by create next app"
};

const Page = () => {
    return (
        <main className='flex flex-col gap-5'>
            <Title name="buttons"></Title>

            <div className="grid grid-cols-2 gap-5">
                <div>
                    <BasicBtnCard></BasicBtnCard>
                </div>
                
                <div>
                    <OutlineBtnCard></OutlineBtnCard>
                </div>
            </div>
        </main>
    );
}

export default Page;
