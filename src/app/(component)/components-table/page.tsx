import React, { Suspense } from 'react';
import { Grid } from '@/components/grid';
import Title from '@/components/title/title';
import { Metadata } from 'next';

const BasicTableCard = React.lazy(() => import('@/components/table/basic/card'));
const BorderTableCard = React.lazy(() => import('@/components/table/border/card'));
const HeadTableCard = React.lazy(() => import('@/components/table/head/card'));
const HoverTableCard = React.lazy(() => import('@/components/table/hover/card'));
const ResponsiveTableCard = React.lazy(() => import('@/components/table/responsive/card'));
const RowTableCard = React.lazy(() => import('@/components/table/row/card'));
const SmallTableCard = React.lazy(() => import('@/components/table/small/card'));
const StripedTableCard = React.lazy(() => import('@/components/table/striped/card'));

export const metadata: Metadata = {
    title: "Regular Table",
    description: "Generated by create next app"
};

const Page = () => {
    return (
        <main className='flex flex-col gap-5'>
            <Title name="regular table"></Title>

            <Grid>
                <div className='flex flex-col gap-5'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <BasicTableCard></BasicTableCard>
                        <BorderTableCard></BorderTableCard>
                        <HoverTableCard></HoverTableCard>
                        <RowTableCard></RowTableCard>
                    </Suspense>
                </div>

                <div className='flex flex-col gap-5'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <HeadTableCard></HeadTableCard>
                        <ResponsiveTableCard></ResponsiveTableCard>
                        <SmallTableCard></SmallTableCard>
                        <StripedTableCard></StripedTableCard>
                    </Suspense>
                </div>
            </Grid>
        </main>
    );
}

export default Page;
