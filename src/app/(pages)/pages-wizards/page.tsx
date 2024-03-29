import { BtnPrimary } from '@/components/button/basic/style/btn-primary';
import { BtnSecondary } from '@/components/button/basic/style/btn-secondary';
import { Card } from '@/components/card/card';
import Title from '@/components/title/title';
import { Input } from '@/forms/regular-form/components/input';
import { Select } from '@/forms/select/componets/select';
import WidgetBtn from '@/page/wizard/button';
import WidgetValue from '@/page/wizard/child';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Wizard",
    description: "Generated by create next app"
};

const page = () => {
    return (
        <main className='flex flex-col gap-5'>
            <Title name="Wizard layout"></Title>
            <Card
                addClass='py-10'>
                <WidgetBtn
                    btnWidget={[
                        { number: 1, desc: "create new account" },
                        { number: 2, desc: "Setup Your Profile" },
                        { number: 3, desc: "Setup Your Business Details" },
                        { number: 4, desc: "Setup Billing Account" },
                        { number: 5, desc: "Finalize your purchase" },
                    ]}>
                </WidgetBtn>

                <WidgetValue>
                    <div className="flex flex-col gap-4">
                        <div className="text-base font-medium">Profile Settings</div>
                        
                        <div className='grid grid-cols-2 gap-5'>
                            <Input
                                id='from'
                                title='from'
                                type='text'
                                placeholder='example@gmail.com'
                                label={true}
                                readonly={false}
                                shape='square'
                                help=''
                                helpText='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                sizing='medium' 
                                layout={'vertical'}>
                            </Input>

                            <Input
                                id='to'
                                title='to'
                                type='text'
                                placeholder='example@gmail.com'
                                label={true}
                                readonly={false}
                                shape='square'
                                help=''
                                helpText='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                sizing='medium' 
                                layout={'vertical'}>
                            </Input>

                            <Input
                                id='subject'
                                title='subject'
                                type='text'
                                placeholder='Important Meeting'
                                label={true}
                                readonly={false}
                                shape='square'
                                help=''
                                helpText='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                sizing='medium' 
                                layout={'vertical'}>
                            </Input>

                            <Input
                                id='has-the-word'
                                title='has the word'
                                type='text'
                                placeholder='Job, Work, Documentation'
                                label={true}
                                readonly={false}
                                shape='square'
                                help=''
                                helpText='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                sizing='medium' 
                                layout={'vertical'}>
                            </Input>

                            <Input
                                id='doesnt-have'
                                title="doesn't have"
                                type='text'
                                placeholder='Job, Work, Documentation'
                                label={true}
                                readonly={false}
                                shape='square'
                                help=''
                                helpText='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                sizing='medium' 
                                layout={'vertical'}>
                            </Input>

                            <Select
                                id='size'
                                label={true}
                                labelText='size'
                                help=''
                                helpText='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                                sizing='medium'>
                                    <option value="10">10</option>
                                    <option value="10">25</option>
                                    <option value="10">35</option>
                            </Select>
                        </div>
                    </div>

                    <div className="flex justify-end gap-2">
                        <BtnSecondary title="previous" addType="button" addClass='w-24 px-3 py-2'></BtnSecondary>
                        <BtnPrimary title="Next" addType="button" addClass='w-24 px-3 py-2'></BtnPrimary>
                    </div>
                </WidgetValue>
            </Card>
        </main>
    );
}

export default page