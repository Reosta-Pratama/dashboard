import BasicAlertCard from '@/components/alert/basic/card';
import IconDismissAlertCard from '@/components/alert/icon-dismiss/card';
import { Grid } from '@/components/grid';
import Title from '@/components/title/title';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Alert",
    description: "Generated by create next app"
};

const Page = () => {
    return (
        <main className='flex flex-col gap-5'>
            <Title name="Alert"></Title>

            <Grid>
                <div className='flex flex-col gap-5'>
                    <BasicAlertCard></BasicAlertCard>
                </div>

                <div className='flex flex-col gap-5'>
                    <IconDismissAlertCard></IconDismissAlertCard>
                </div>
            </Grid>
        </main>
    );
}

export default Page;
