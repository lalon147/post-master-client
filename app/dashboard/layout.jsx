import React from 'react';
import Navbar from './DashboardNavbar';





const Layout = ({ children }) => {
    return (
        <div className='flex mt-28'>
            <div className='lg:w-2/12 min-h-screen border-r-2 bg-emerald-300'>
                <Navbar></Navbar>

            </div>
            <div className='flex-1 p-5'>
                {children}

            </div>



        </div>
    );
}

export default Layout;
