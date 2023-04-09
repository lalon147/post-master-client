import React from 'react';
import Navbar from './DashboardNavbar';

const Layout = ({children}) => {
    return (
        <div className='flex'>
            <div className='lg:w-2/12 min-h-screen border-r-2'>
                <Navbar></Navbar>
            </div>
            <div className='flex-1 p-5'>
               {children}
            </div>
        </div>
    );
}

export default Layout;
