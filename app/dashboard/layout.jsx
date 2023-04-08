import React from 'react';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div className='flex'>
            <div className='bg-base-200 lg:w-2/12 min-h-screen'>
                <Navbar></Navbar>
            </div>
            <div className='flex-1  bg-blue-400 '>
                Dashboard
            </div>
        </div>
    );
}

export default Layout;
