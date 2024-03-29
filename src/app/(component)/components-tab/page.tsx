import React, { Suspense } from 'react';
import { Grid } from '@/components/grid';
import Title from '@/components/title/title';
import { Metadata } from 'next';

const CardBasicTab = React.lazy(() => import('@/components/tab/basic/card'));
const CardBoxedTab = React.lazy(() => import('@/components/tab/boxed/card'));
const CardLinkTab = React.lazy(() => import('@/components/tab/link/card'));

export const metadata: Metadata = {
    title: "Tab",
    description: "Generated by create next app"
};

const Page = () => {
    return (
        <main className='flex flex-col gap-5'>
            <Title name="Tab"></Title>

            <Grid>
                <div className='flex flex-col gap-5'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <CardBasicTab></CardBasicTab>
                        <CardBoxedTab></CardBoxedTab>
                        <CardLinkTab></CardLinkTab>
                    </Suspense>
                </div>
            </Grid>
        </main>
    );
}

export default Page;
