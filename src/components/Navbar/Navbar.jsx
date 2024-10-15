import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGripLines } from "react-icons/fa";

const Navbar = () => {
    const links = [
        { title: "Home", link: "/" },
        { title: "About Us", link: "/about-us" },
        { title: "All Books", link: "/all-books" },
        { title: "Cart", link: "/cart" },
        { title: "Profile", link: "/profile" },
    ];

    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavVisible(!isMobileNavVisible);
    };

    return (
        <>
            <nav className='z-50 relative flex bg-zinc-800 text-white px-8 py-2 items-center justify-between'>
                <Link to="/" className='flex items-center'>
                    <img className='h-10 me-4' src='https://cdn-icons-png.flaticon.com/128/10433/10433049.png' alt='logo' />
                    <h1 className='text-2xl font-semibold'>Book Heaven</h1>
                </Link>
                <div className='nav-links-bookheaven md:flex items-center gap-4'>
                    <div className='hidden md:flex gap-4'>
                        {links.map((item, i) => (
                            <Link to={item.link} className='hover:text-blue-500 transition-all duration-300' key={i}>{item.title}</Link>
                        ))}
                    </div>

                    {/* Login and Signup buttons visible on large screens */}
                    <div className='hidden md:flex gap-4'>
                        <Link
                            to="/Login"
                            className='px-4 mb-8 text-3xl font-semibold py-2 border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-duration:300ms'
                        >
                            LogIn
                        </Link>
                        <Link
                            to="/SignUp"
                            className='px-4 mb-8 text-3xl font-semibold py-2 bg-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-duration:300ms'
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* Hamburger button visible on small screens */}
                    <button 
                        className='block md:hidden text-white text-2xl hover:text-zinc-400' 
                        onClick={toggleMobileNav}
                    >
                        <FaGripLines />
                    </button>
                </div>
            </nav>

            {/* Mobile navigation menu */}
            <div className={`${isMobileNavVisible ? 'flex' : 'hidden'} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex-col items-center justify-center`}>
                {links.map((item, i) => (
                    <Link to={item.link} className='text-white text-4xl mb-8 font-semibold hover:text-blue-500 transition-all duration-300' key={i} onClick={toggleMobileNav}>
                        {item.title}
                    </Link>
                ))}
                
                {/* Login and Signup buttons under the hamburger button for mobile */}
                <div className='flex flex-col items-center mt-8'>
                    <Link
                        to="/Login"
                        className='mb-4 px-4 text-3xl font-semibold py-2 border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-duration:300ms'
                        onClick={toggleMobileNav}
                    >
                        LogIn
                    </Link>
                    <Link
                        to="/SignUp"
                        className='px-4 text-3xl font-semibold py-2 bg-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-duration:300ms'
                        onClick={toggleMobileNav}
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
