import React, { useState, useEffect } from 'react'
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from 'react-router-dom';
import profile from "../assets/profile.jpg"

const SideBar = () => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

    // Close sidebar when route changes (mobile)
    useEffect(() => {
        setIsSidebarOpen(false);
    }, [location.pathname]);

    // Close sidebar when clicking outside (mobile)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isSidebarOpen && window.innerWidth < 768) {
                const sidebar = document.getElementById('sidebar');
                const hamburger = document.getElementById('hamburger-btn');
                
                if (sidebar && !sidebar.contains(event.target) && 
                    hamburger && !hamburger.contains(event.target)) {
                    setIsSidebarOpen(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isSidebarOpen]);

    // Prevent body scroll when sidebar is open on mobile
    useEffect(() => {
        if (isSidebarOpen && window.innerWidth < 768) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isSidebarOpen]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Hamburger Menu Button - Only visible on mobile */}
            <button
                id="hamburger-btn"
                onClick={toggleSidebar}
                className="fixed top-2 right-4 z-50 p-2 bg-cyan-200 text-black rounded-lg shadow-lg md:hidden hover:bg-cyan-300 transition-colors duration-200"
                aria-label="Toggle sidebar"
            >
                {isSidebarOpen ? (
                    <HiX className="w-6 h-6" />
                ) : (
                    <HiMenuAlt3 className="w-6 h-6" />
                )}
            </button>

            {/* Backdrop Overlay - Only visible on mobile when sidebar is open */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-cyan-200 bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div 
                id="sidebar"
                className={`
                    fixed md:static inset-y-0 left-0 z-40
                    h-screen bg-cyan-200 text-black w-64 flex flex-col
                    transform transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                    shadow-xl md:shadow-none
                `}
            >
                {/* Logo/Profile Section */}
                <div className="flex items-center gap-3 p-6 border-b border-gray-700">
                    <img 
                        src={profile} 
                        alt="Profile" 
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">Admin Panel</span>
                        <span className="text-xs text-gray-800">Dashboard</span>
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
                                        <div className="flex items-center gap-3 px-4 py-3 text-gray-800 cursor-not-allowed rounded-lg">
                                            <IconComponent className="w-5 h-5" />
                                            <span className="text-sm font-medium">{item.label}</span>
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.href}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                                active
                                                    ? 'bg-blue-600 text-white shadow-lg'
                                                    : 'text-gray-800 hover:bg-blue-600 hover:text-white'
                                            }`}
                                            onClick={() => {
                                                // Close sidebar on mobile when link is clicked
                                                if (window.innerWidth < 768) {
                                                    setIsSidebarOpen(false);
                                                }
                                            }}
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
                <div className="p-4 border-t border-gray-800">
                    <div className="text-xs text-gray-800 text-center">
                        © 2024 Bookstore Admin
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar
