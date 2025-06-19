import React, { useContext, useEffect, useState } from 'react';
import { FaBook, FaBars, FaXmark } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './Authprovider';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const { user } = useContext(AuthContext);

    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { link: 'Home', path: "/" },
        { link: 'About', path: "/about" },
        { link: 'Shop', path: "/shop" },
        { link: 'Sell Your Book', path: "/admin/dashboard" },
        { link: 'Contact', path: "/contact" },
    ];

    const navLinkClass = ({ isActive }) =>
        `block font-bold text-base cursor-pointer px-2 py-1 rounded-lg ${
            isActive ? 'bg-black text-white' : 'text-black hover:text-blue-700'
        }`;

    return (
        <header className="w-full z-10 fixed top-0 left-0 right-0 transition-all ease-in duration-300">
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? 'bg-cyan-200 shadow-md' : 'bg-transparent'}`}>
                <div className="flex justify-between items-center">
                    <NavLink to="/" className="text-2xl font-bold text-black flex items-center gap-2">
                        <FaBook className="inline-block" /> Books
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item, index) => (
                            <NavLink key={index} to={item.path} className={navLinkClass}>
                                {item.link}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {isMenuOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="absolute top-16 left-0 right-0 bg-blue-700 px-6 py-4 space-y-4 z-20 md:hidden">
                            {navItems.map((item, index) => (
                                <NavLink key={index} to={item.path} className={navLinkClass} onClick={() => setMenuOpen(false)}>
                                    {item.link}
                                </NavLink>
                            ))}
                        </div>
                    )}

                    {/* User Email Display */}
                    <div className="hidden lg:block">
                        {user?.email}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
