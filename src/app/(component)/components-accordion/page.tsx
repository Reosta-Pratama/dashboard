import BasicAccordionCard from '@/components/accordion/basic/card';
import Title from '@/components/title/title';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Accordion",
    description: "Generated by create next app"
};

const page = () => {
    return (
        <main className='flex flex-col gap-5'>
            <Title name="Accordion"></Title>

            <div className="grid grid-cols-2 gap-5">
                <div className='flex flex-col gap-5'>
                    <BasicAccordionCard></BasicAccordionCard>
                </div>

                <div className='flex flex-col gap-5'>
                </div>
            </div>
        </main>
    );
}

export default page