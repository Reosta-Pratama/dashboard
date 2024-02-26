"use client"

import BasicTable from '@/components/table/basic/table';
import { BasicTd } from '@/components/table/basic/td';
import { BasicTh } from '@/components/table/basic/th';
import { DummyTable } from '@/dummys/dummy-table';
import React, { useState } from 'react'
import { FiFile } from 'react-icons/fi'
import { BoxCode } from '../style/box';

interface CodeBasicTableProps {
    active: boolean;
}

export const CodeBasicTable: React.FC<CodeBasicTableProps> = ({active}) => {
  return (
    <div className="p-5">
        {active == false 
            ? 
            <div className="flex flex-col gap-5">
              {/* Table 1 */}
              <BasicTable>
                <thead>
                    <tr>
                        <BasicTh>#</BasicTh>
                        <BasicTh>first name</BasicTh>
                        <BasicTh>last name</BasicTh>
                        <BasicTh>username</BasicTh>
                    </tr>
                </thead>
                <tbody>
                    {
                      DummyTable.map((user, index) => (
                        <tr>
                            <BasicTd>{index + 1}</BasicTd>
                            <BasicTd>{user.firstName}</BasicTd>
                            <BasicTd>{user.lastName}</BasicTd>
                            <BasicTd>@{user.username}</BasicTd>
                        </tr>
                      ))
                    }
                </tbody>
              </BasicTable>

              {/* Table 2 */}
              <BasicTable addClass="bg-[#1e293b] text-white">
                <thead>
                    <tr>
                        <BasicTh addClass="border-slate-600">#</BasicTh>
                        <BasicTh addClass="border-slate-600">first name</BasicTh>
                        <BasicTh addClass="border-slate-600">last name</BasicTh>
                        <BasicTh addClass="border-slate-600">username</BasicTh>
                    </tr>
                </thead>
                <tbody>
                    {
                      DummyTable.map((user, index) => (
                        <tr>
                            <BasicTd addClass="border-slate-600">{index + 1}</BasicTd>
                            <BasicTd addClass="border-slate-600">{user.firstName}</BasicTd>
                            <BasicTd addClass="border-slate-600">{user.lastName}</BasicTd>
                            <BasicTd addClass="border-slate-600">@{user.username}</BasicTd>
                        </tr>
                      ))
                    }
                </tbody>
              </BasicTable>
            </div>
            : <Code/>}
    </div>
  )
}

const tables = [
    {
      tableClass: '',
      thClass: '',
      tdClass: ''
    },
    {
      tableClass: 'bg-[#1e293b] text-white',
      thClass: 'border-slate-600',
      tdClass: 'border-slate-600'
    }
];

const tableAsString = tables
    .map((item) => {
        return `<table class="w-full text-left ${item.tableClass}"> 
          <thead>
            <tr>
              <th class="font-medium capitalize px-5 py-3 border-b-2 ${item.thClass}">#</th>
              <th class="font-medium capitalize px-5 py-3 border-b-2 ${item.thClass}">first name</th>
              <th class="font-medium capitalize px-5 py-3 border-b-2 ${item.thClass}">lastt name</th>
              <th class="font-medium capitalize px-5 py-3 border-b-2 ${item.thClass}">username</th>
            </tr>
          </thead>
          <tbody>
          ${DummyTable.map((user, index) => (
            `<tr key=${index + 1}>
              <td class="font-medium capitalize px-5 py-3 border-b-2 ${item.tdClass}">${index + 1}</td>
              <td class="font-medium capitalize px-5 py-3 border-b-2 ${item.tdClass}">${user.firstName}</td>
              <td class="font-medium capitalize px-5 py-3 border-b-2 ${item.tdClass}">${user.lastName}</td>
              <td class="font-medium capitalize px-5 py-3 border-b-2 ${item.tdClass}">${user.username}</td>
            </tr>`
          )).join('')}
          </tbody>
        </table>
`;
    })
    .join('');

const Code = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator
            .clipboard
            .writeText(tableAsString)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            })
            .catch((err) => {
                console.error('Failed to copy:', err);
            });
    };

    return (
        <div className="flex flex-col gap-3">
            <button className='w-fit flex items-center shadow-sm gap-2 py-1 px-2
                border border-solid border-secondary rounded-md'
                onClick={handleCopy}>
                <span className='text-base'><FiFile /></span>
                <span className='text-slate-500 font-medium'>{copied ? 'Copied!' : 'Copy example code'}</span>
            </button>

            <BoxCode>
              <pre className='px-5 py-4'>
                  {
                      tables.map((item, index) => {
                          return (
                              <code key={index} className='text-xs'>
                                  &lt;<span className='text-[#22863a]'>table</span> {``}
                                  <span className='text-[#005cc5]'>class</span>
                                  {`="w-full text-left ${item.tableClass}"`}&gt; 

                                    <br />{``}  &lt;<span className='text-[#22863a]'>thead</span>
                                      <br />{` `}  &lt;<span className='text-[#22863a]'>tr</span>
                                        <br />{`  `}  &lt;<span className='text-[#22863a]'>th</span>{` `}<span className='text-[#005cc5]'>class</span>{`="font-medium capitalize px-5 py-3 border-b-2 ${item.thClass}"`}&gt;#&lt;/<span className='text-[#22863a]'>th</span>&gt;
                                        <br />{`  `}  &lt;<span className='text-[#22863a]'>th</span>{` `}<span className='text-[#005cc5]'>class</span>{`="font-medium capitalize px-5 py-3 border-b-2 ${item.thClass}"`}&gt;first name&lt;/<span className='text-[#22863a]'>th</span>&gt;
                                        <br />{`  `}  &lt;<span className='text-[#22863a]'>th</span>{` `}<span className='text-[#005cc5]'>class</span>{`="font-medium capitalize px-5 py-3 border-b-2 ${item.thClass}"`}&gt;last name&lt;/<span className='text-[#22863a]'>th</span>&gt;
                                        <br />{`  `}  &lt;<span className='text-[#22863a]'>th</span>{` `}<span className='text-[#005cc5]'>class</span>{`="font-medium capitalize px-5 py-3 border-b-2 ${item.thClass}"`}&gt;username&lt;/<span className='text-[#22863a]'>th</span>&gt;
                                      <br/>{`   `}&lt;/<span className='text-[#22863a]'>tr</span>&gt;
                                    <br/>{`  `}&lt;/<span className='text-[#22863a]'>thead</span>&gt;


                                    <br />{``}  &lt;<span className='text-[#22863a]'>tbody</span>
                                      {
                                          DummyTable.map((user, index) => {
                                            return (
                                              <>
                                                <br />{` `}  &lt;<span className='text-[#22863a]'>tr</span>
                                                  <br />{`  `}  &lt;<span className='text-[#22863a]'>td</span>{` `}<span className='text-[#005cc5]'>class</span>{`="px-5 py-3 border-b-2 ${item.tdClass}"`}&gt;{index + 1}&lt;/<span className='text-[#22863a]'>td</span>&gt;
                                                  <br />{`  `}  &lt;<span className='text-[#22863a]'>td</span>{` `}<span className='text-[#005cc5]'>class</span>{`="px-5 py-3 border-b-2 ${item.tdClass}"`}&gt;{user.firstName}&lt;/<span className='text-[#22863a]'>td</span>&gt;
                                                  <br />{`  `}  &lt;<span className='text-[#22863a]'>td</span>{` `}<span className='text-[#005cc5]'>class</span>{`="px-5 py-3 border-b-2 ${item.tdClass}"`}&gt;{user.lastName}&lt;/<span className='text-[#22863a]'>td</span>&gt;
                                                  <br />{`  `}  &lt;<span className='text-[#22863a]'>td</span>{` `}<span className='text-[#005cc5]'>class</span>{`="px-5 py-3 border-b-2 ${item.tdClass}"`}&gt;@{user.username}&lt;/<span className='text-[#22863a]'>td</span>&gt;
                                                <br/>{`   `}&lt;/<span className='text-[#22863a]'>tr</span>&gt;
                                              </>
                                            )
                                          })
                                        }
                                    <br/>{`  `}&lt;/<span className='text-[#22863a]'>tbody</span>&gt;

                                  <br/>&lt;/<span className='text-[#22863a]'>table</span>&gt; 
                                  <br/><br />
                              </code>
                          )
                      })
                  }
              </pre>
            </BoxCode>
        </div>
    )
}