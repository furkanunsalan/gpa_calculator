// eslint-disable-next-line no-unused-vars
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-[#313c41] p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                    <a className="font-bold text-2xl" href="/">GPA Calculator</a>
                </div>
                <div className="nav-links">
                    <a href="#info" className="hover:text-gray-300 p-2">
                        Info
                    </a>
                    <a href="#tool" className="hover:text-gray-300 p-2">
                        Tool
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
