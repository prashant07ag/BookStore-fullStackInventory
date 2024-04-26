import React, { useContext, useEffect, useState } from 'react';
import { FaBook, FaBars, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AuthContext } from './Authprovider';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const {user} = useContext(AuthContext);
    console.log(user);

    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Corrected removeEventListener
        }
    }, []);

    const currentPath = window.location.pathname; // Store the current path outside the map function

    const navItems = [
        { link: 'Home', path: "/" },
        { link: 'About', path: "/about" },
        { link: 'Shop', path: "/shop" },
        // { link: 'Blog', path: "/blog" },
        { link: 'Sell Your Book', path: "/admin/dashboard" },
        { link: 'Contact', path: "/contact" },
    ];
    
    return (
        <header className='w-full z-10 bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-500" : ""}`}>
                <div className="flex justify-between items-center">
                    <Link to="/" className=' text-2xl font-bold text-black-700 flex items-center gap-2'><FaBook className='inline-block' />Books</Link>
                    <div className="md:flex space-x-12 hidden">
                        {navItems.map((item, index) => (
                            <Link to={item.path} key={index}
                                className={`block font-bold text-base text-black cursor-pointer hover:text-blue-700 ${currentPath === item.path ? 'bg-black px-2 py-1 rounded-lg text-white' : ''}`}>
                                {item.link}
                            </Link>
                        ))}
                    </div>
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus-outline-none'>
                            {
                                isMenuOpen ? <FaXmark className='w-5 h-5 text-black' /> :
                                    <FaBars className='w-5 h-5 text-black' />
                            }
                        </button>
                    </div>
                    <div className={` space-y-4 px-4 mt-12 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                        {navItems.map((item, index) => (
                            <Link to={item.path} key={index} className='block text-base text-black cursor-pointer hover:text-blue-700'>
                                {item.link}
                            </Link>
                        ))}
                    </div>
                    <div className='hidden lg:block'>
                        {
                            user ? user.email : ""
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;
