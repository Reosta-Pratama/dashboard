import React, { Suspense } from 'react';
import { Grid } from '@/components/grid';
import Title from '@/components/title/title';
import { Metadata } from 'next';

const CardBasicTooltip = React.lazy(() => import('@/components/tooltip/basic/card'));
const CardClickTooltip = React.lazy(() => import('@/components/tooltip/click/card'));

export const metadata: Metadata = {
    title: "Tooltip",
    description: "Generated by create next app"
};

const Page = () => {
    return (
        <main className='flex flex-col gap-5'>
            <Title name="Tooltip"></Title>

            <Grid>
                <div className='flex flex-col gap-5'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <CardBasicTooltip></CardBasicTooltip>
                    </Suspense>
                </div>

                <div className='flex flex-col gap-5'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <CardClickTooltip></CardClickTooltip>
                    </Suspense>
                </div>
            </Grid>
        </main>
    );
}

export default Page;
