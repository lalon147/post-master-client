import Link from 'next/link';
import React from 'react';

const MenuItems = ({address, title}) => {
    return (
        <div>
            <Link href={address} className="lg:text-white">
            {title}
            </Link>
        </div>
    );
}

export default MenuItems;
