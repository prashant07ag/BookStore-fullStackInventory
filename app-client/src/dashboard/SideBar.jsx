import React from 'react'
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import profile from "../assets/profile.jpg"

const SideBar = () => {
    return (
        <div>
            <Sidebar aria-label="Sidebar with logo branding example" className='h-screen'>
                <Sidebar.Logo href="#" className='gap-2' imgAlt="logo">
                    Prashant
                </Sidebar.Logo>
                <Sidebar.Items className="">
                    <Sidebar.ItemGroup className='flex flex-col justify-start items-start gap-5 py-5'>
                        <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/dashboard/upload" icon={HiViewBoards}>
                            Upload Books
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                            Manage Books
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiUser}>
                            Users
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiShoppingBag}>
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item href="/logout" icon={HiTable}>
                            Log Out
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}

export default SideBar