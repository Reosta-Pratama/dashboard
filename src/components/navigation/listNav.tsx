import React from 'react'
import Navigation from './nav'
import { FiCalendar, FiCreditCard, FiFileText, FiHardDrive, FiHome, FiInbox, FiMessageSquare, FiShoppingBag } from 'react-icons/fi'
import Divider from '../divider'

const ListNav = () => {
    return (
        <nav>
            <ul className='flex flex-col gap-1'>
                <Navigation name="dashboard" href="/" >
                    <FiHome />
                </Navigation>

                <Navigation name='e-commerce' href='/e-commerce' dropdown="yes">
                    <FiShoppingBag />
                </Navigation>

                <Navigation name="inbox" href="/inbox" >
                    <FiInbox />
                </Navigation>

                <Navigation name="file manager" href="/file-manager" >
                    <FiHardDrive />
                </Navigation>

                <Navigation name="poin of sale" href="/poin-of-sale" >
                    <FiCreditCard />
                </Navigation>

                <Navigation name="chat" href="/chat" >
                    <FiMessageSquare />
                </Navigation>

                <Navigation name="post" href="/post" >
                    <FiFileText />
                </Navigation>

                <Navigation name="calender" href="/calender" >
                    <FiCalendar />
                </Navigation>

                <Divider></Divider>
            </ul>
        </nav>
    )
}

export default ListNav