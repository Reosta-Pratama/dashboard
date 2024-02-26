import Title from '@/components/title';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Regular dropdown",
    description: "Generated by create next app"
};

const page = () => {
    return (
        <main className='flex flex-col gap-5'>
            <Title name="dropdown"></Title>

            <div className="grid grid-cols-2 gap-5">
            </div>
        </main>
    );
}

export default page