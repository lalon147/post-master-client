import Link from 'next/link';
import React from 'react';

const MenuItems = ({address, title}) => {
    return (
        <div>
            <Link href={address}>
            {title}
            </Link>
        </div>
    );
}

export default MenuItems;
