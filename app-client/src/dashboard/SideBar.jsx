import React from 'react'
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import profile from "../assets/profile.jpg"

const SideBar = () => {
    const location = useLocation();

    const sidebarItems = [
        {
            href: "/admin/dashboard",
            icon: HiChartPie,
            label: "Dashboard"
        },
        {
            href: "/admin/dashboard/upload",
            icon: HiViewBoards,
            label: "Upload Books"
        },
        {
            href: "/admin/dashboard/manage",
            icon: HiInbox,
            label: "Manage Books"
        },
        {
            href: "#",
            icon: HiUser,
            label: "Users"
        },
        {
            href: "#",
            icon: HiShoppingBag,
            label: "Products"
        },
        {
            href: "/login",
            icon: HiArrowSmRight,
            label: "Sign In"
        },
        {
            href: "/logout",
            icon: HiTable,
            label: "Log Out"
        }
    ];

    const isActive = (href) => {
        if (href === "/admin/dashboard") {
            return location.pathname === href;
        }
        return location.pathname.startsWith(href) && href !== "#";
    };

    return (
        <div className="h-screen bg-gray-900 text-white w-64 flex flex-col">
            {/* Logo/Profile Section */}
            <div className="flex items-center gap-3 p-6 border-b border-gray-700">
                <img 
                    src={profile} 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                    <span className="text-sm font-medium">Admin Panel</span>
                    <span className="text-xs text-gray-400">Dashboard</span>
                </div>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 py-6">
                <ul className="space-y-2 px-4">
                    {sidebarItems.map((item, index) => {
                        const IconComponent = item.icon;
                        const active = isActive(item.href);
                        
                        return (
                            <li key={index}>
                                {item.href === "#" ? (
                                    <div className="flex items-center gap-3 px-4 py-3 text-gray-400 cursor-not-allowed rounded-lg">
                                        <IconComponent className="w-5 h-5" />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </div>
                                ) : (
                                    <Link
                                        to={item.href}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                            active
                                                ? 'bg-blue-600 text-white shadow-lg'
                                                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                        }`}
                                    >
                                        <IconComponent className="w-5 h-5" />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700">
                <div className="text-xs text-gray-400 text-center">
                    © 2024 Bookstore Admin
                </div>
            </div>
        </div>
    )
}

export default SideBar
