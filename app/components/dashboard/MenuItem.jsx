import Link from 'next/link';
import React from 'react';

const MenuItems = ({address, title}) => {
    return (
        <div >
            <Link className='text-xl bg-emerald-400 text-white inline-block px-2 py-2 w-full mb-1 rounded-lg' href={address}>
            {title}
            </Link>
        </div>
    );
}

export default MenuItems;