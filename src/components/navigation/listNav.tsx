import React from 'react'
import Navigation from './nav'
import {
    FiCalendar,
    FiCreditCard,
    FiEdit,
    FiFileText,
    FiGrid,
    FiHardDrive,
    FiHome,
    FiInbox,
    FiLayout,
    FiMessageSquare,
    FiSettings,
    FiShoppingBag,
    FiSidebar,
    FiUser,
    FiUsers
} from 'react-icons/fi'
import Divider from '../divider/divider'

const ListNav = () => {
    return (
        <nav>
            <ul className='flex flex-col gap-1'>
                {/* <Navigation name="dashboard" href="/">
                    <FiHome/>
                </Navigation> */}

                {/* <Navigation
                    name='e-commerce'
                    href=''
                    dropdown="yes"
                    droplink={[
                                ['Categories', '/e-commerce-categories'],
                                ['Add Product', '/e-commerce-add-product'],
                                ['product list', '/e-commerce-product-list'],
                                ['transaction list', '/e-commerce-transaction-list'],
                                ['seller list', '/e-commerce-seller-list'],
                                ['seller detail', '/e-commerce-seller-detail'],
                                ['review', '/e-commerce-review'],
                    ]}>
                    <FiShoppingBag/>
                </Navigation> */}

                {/* <Navigation name="inbox" href="/inbox">
                    <FiInbox/>
                </Navigation> */}

                {/* <Navigation name="file manager" href="/file-manager">
                    <FiHardDrive/>
                </Navigation> */}

                {/* <Navigation name="poin of sale" href="/poin-of-sale">
                    <FiCreditCard/>
                </Navigation> */}

                {/* <Navigation name="chat" href="/chat">
                    <FiMessageSquare/>
                </Navigation> */}

                {/* <Navigation name="post" href="/post">
                    <FiFileText/>
                </Navigation> */}

                {/* <Navigation name="calender" href="/calender">
                    <FiCalendar/>
                </Navigation> */}

                {/* <Divider></Divider> */}

                {/* <Navigation name = 'data list' href = '' dropdown = "yes"
                    droplink={[
                        ['data list 1', '/data-list-1'],
                        ['data list 2', '/data-list-2'],
                    ]}>
                    <FiEdit/>
                </Navigation> */}

                {/* <Navigation name='users' href='/users'>
                    <FiUsers/>
                </Navigation> */}

                {/* <Navigation name='profile' href='/profile'>
                    <FiUser/>
                </Navigation> */}

                <Navigation name='pages' href='' dropdown="yes"
                    droplink={[
                        ['wizards', '/pages-wizards'],
                        ['blog', '/pages-blog'],
                        ['pricing', '/pages-pricing'],
                        ['invoice', '/pages-invoice'],
                        ['FAQ', '/pages-faq'],
                        ['login', '/pages-login'],
                        ['register', '/pages-register'],
                        ['error', '/pages-error'],
                        ['update profile', '/pages-update-profile'],
                        ['change password', '/pages-change-password'],
                    ]}>
                    <FiLayout/>
                </Navigation>

                <Divider></Divider>

                <Navigation
                    name='components'
                    href=''
                    dropdown="yes"
                    droplink={[
                        ['accordion', '/components-accordion'],
                        ['alert', '/components-alert'],
                        ['button', '/components-button'],
                        ['dropdown', '/components-dropdown'],
                        ['modal', '/components-modal'],
                        ['notification', '/components-notification'],
                        ['progress bar', '/components-progress-bar'],
                        ['slide over', '/components-slide-over'],
                        ['tab', '/components-tab'],
                        ['table', '/components-table'],
                        ['tooltip', '/components-tooltip'],
                    ]}>
                    <FiGrid/>
                </Navigation>


                <Navigation
                    name='forms'
                    href=''
                    dropdown="yes"
                    droplink={[
                        ['datepicker', '/forms-datepicker'],
                        ['file upload', '/forms-file-upload'],
                        ['regular form', '/forms-regular-form'],
                        ['tom select', '/forms-tom-select'],
                        ['wysiwyg editor', '/forms-wysiwyg-editor'],
                    ]}>
                    <FiSidebar/>
                </Navigation>


                <Navigation
                    name='widgets'
                    href=''
                    dropdown="yes"
                    droplink={[
                        ['charts', '/widgets-charts'],
                        ['image zoom', '/widgets-image-zoom'],
                        ['slider', '/widgets-slider'],
                    ]}>
                    <FiSettings/>
                </Navigation>

            </ul>
        </nav>
    )
}

export default ListNav