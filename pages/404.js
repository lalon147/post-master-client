import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <>
           <div className='w-full min-h-screen flex justify-center items-center bg-slate-600'>
                <div className='lg:w-2/3 bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(255,255,255,0.1)] drop-shadow-lg backdrop-blur-sm p-5 py-28 rounded-3xl text-center text-white'>
                    <h2 className='mb-10 font-bold text-7xl text-white'>
                        <span>N</span>
                        <span className='w-14 h-14 animate-spin delay-200 transition-all inline-block border-4 bg-transparent border-success border-dashed rounded-full'></span>
                        <span>T</span>
                        <span> </span>
                        <span>F</span>
                        <span className='w-14 h-14 animate-spin delay-200 transition-all inline-block border-4 bg-transparent border-success border-dashed rounded-full'></span>
                        <span>U</span>
                        <span>N</span>
                        <span>D</span>
                    </h2>
                    <p className='text-2xl font-thin mb-3'>We can't find any page.</p>
                    <h2 className='text-3xl'>Back to <Link href='/' className='text-red-400'>Home Page</Link></h2>

                </div>
           </div>
        </>
    );
}

export default NotFound;

