import React from 'react';
import Link from 'next/link';

const Menuitem = ({ title, address, icon: Icon }) => {
  return (
    <Link href={address} className="flex items-center space-x-2 hover:text-amber-500">
      
        <Icon className="text-2xl sm:hidden"/>
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
      
    </Link>
  );
};

export default Menuitem;
