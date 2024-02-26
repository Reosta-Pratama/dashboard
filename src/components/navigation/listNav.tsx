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
import Divider from '../divider'

const ListNav = () => {
    return (
        <nav>
            <ul className='flex flex-col gap-1'>
                <Navigation name="dashboard" href="/">
                    <FiHome/>
                </Navigation>

                <Navigation
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
                </Navigation>

                <Navigation name="inbox" href="/inbox">
                    <FiInbox/>
                </Navigation>

                <Navigation name="file manager" href="/file-manager">
                    <FiHardDrive/>
                </Navigation>

                <Navigation name="poin of sale" href="/poin-of-sale">
                    <FiCreditCard/>
                </Navigation>

                <Navigation name="chat" href="/chat">
                    <FiMessageSquare/>
                </Navigation>

                <Navigation name="post" href="/post">
                    <FiFileText/>
                </Navigation>

                <Navigation name="calender" href="/calender">
                    <FiCalendar/>
                </Navigation>

                <Divider></Divider>

                <Navigation name = 'crud' href = '' dropdown = "yes"
                    droplink={[
                        ['data list', '/crud-data-list'],
                        ['form', '/crud-form'],
                    ]}>
                    <FiEdit/>
                </Navigation>

                <Navigation name='users' href='/users'>
                    <FiUsers/>
                </Navigation>

                <Navigation name='profile' href='/profile'>
                    <FiUser/>
                </Navigation>

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

                <Navigation name='components' href='' dropdown="yes"
                    droplink={[
                        ['table', '/components-table'],
                        ['tabulator', '/components-tabulator'],
                        ['modal', '/components-modal'],
                        ['slide over', '/components-slide-over'],
                        ['notification', '/components-notification'],
                        ['tab', '/components-tab'],
                        ['accordion', '/components-accordion'],
                        ['button', '/components-button'],
                        ['alert', '/components-alert'],
                        ['progress bar', '/components-progress-bar'],
                        ['tooltip', '/components-tooltip'],
                        ['dropdown', '/components-dropdown'],
                        ['typography', '/components-typography'],
                        ['icon', '/components-icon'],
                        ['loading icon', '/components-loading-icon'],
                    ]}>
                    <FiGrid/>
                </Navigation>

                <Navigation name='forms' href='' dropdown="yes"
                    droplink={[
                        ['regular form', '/forms-regular-form'],
                        ['datepicker', '/forms-datepicker'],
                        ['tom select', '/forms-tom-select'],
                        ['file upload', '/forms-file-upload'],
                        ['wysiwyg editor', '/forms-wysiwyg-editor'],
                        ['validation', '/forms-validation'],
                    ]}>
                    <FiSidebar/>
                </Navigation>

                <Navigation name='widgets' href='' dropdown="yes"
                    droplink={[
                        ['charts', '/widgets-charts'],
                        ['slider', '/widgets-slider'],
                        ['image zoom', '/widgets-image-zoom'],
                    ]}>
                    <FiSettings/>
                </Navigation>
            </ul>
        </nav>
    )
}

export default ListNav