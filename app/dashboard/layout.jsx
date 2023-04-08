import React from 'react';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className='flex'>
            <div className='flex-1 bg-base-200'>
                <Navbar></Navbar>
            </div>
            <div className='bg-blue-400'>
                Dashboard
            </div>
        </div>
    );
}

export default Layout;
