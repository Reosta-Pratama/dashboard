import { Grid } from '@/components/grid';
import Title from '@/components/title/title';
import CardBasicTooltip from '@/components/tooltip/basic/card';
import CardClickTooltip from '@/components/tooltip/click/card';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Tooltip",
    description: "Generated by create next app"
};

const page = () => {
    return (
        <main className='flex flex-col gap-5'>
            <Title name="Tooltip"></Title>

            <Grid>
                <div className='flex flex-col gap-5'>
                    <CardBasicTooltip></CardBasicTooltip>
                </div>

                <div className='flex flex-col gap-5'>
                    <CardClickTooltip></CardClickTooltip>
                </div>
            </Grid>
        </main>
    );
}

export default page