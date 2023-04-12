import React from 'react';
// import MenuItems from '../components/MenuItems';
import MenuItems from "../components/dashboard/Menuitem";


const DashboardNavbar = () => {
  return (
    <div className='p-2 flex flex-col justify-items-center'>
      <div className='flex-1'>
        <div className='mb-4'>
          <img
            className='rounded-full w-5/6 mx-auto'
            src='https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'
            alt=''
          />
        </div>
        <div>
          <MenuItems title='Admin' address='/dashboard/admin'></MenuItems>
          <MenuItems title='Seller' address='/dashboard/seller'></MenuItems>
<<<<<<< HEAD
          <MenuItems title='Delivery Man' address='/dashboard/delivery-man'></MenuItems>
=======
          <MenuItems title='Dellivary Man' address='/dashboard/delivary-man'></MenuItems>

>>>>>>> af0ffe4906341f6456250d780e5dbd4c127f9bb6
        </div>
      </div>
      <div className='h-20'></div>
    </div>
  );
};

export default DashboardNavbar;
