import React from 'react';
import Link from 'next/link';
import Menuitem from './Menuitem';
import { FaHome } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
<script src="https://cdn.tailwindcss.com"></script>;

const Header = () => {
    return (
       <>
        <div className="flex justify-between items-center py-5 max-w-6xl mx-auto">
            <div className="flex gap-4">
                <Menuitem title="Home" address="/" icon={FaHome}/>
                <Menuitem title="About" address="/about" icon={FaInfo}/>
            </div>
            <div className="flex gap-1">
               <Link href={'/'}> <span className="text-2xl bg-green font-bold bg-yellow-500 py-1 px-2 rounded-lg">IMDB</span></Link>
                <span className="text-xl hidden sm:inline">clone</span>
            </div>
        </div>
        <p>Home</p>
        </>
    )
}

export default Header;