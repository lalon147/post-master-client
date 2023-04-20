import React from 'react';
import Image from 'next/image';
import Layout from '../Layout';
import Link from 'next/link';

const Banner = () => {
  return (
    <Layout>
      <div className='carousel w-full min-h-screen'>
        <div id='slide1' className='carousel-item relative w-full min-h-[75%]'>
          <Image
            className='h-52'
            src='/images/imageBanner.png'
            width={600}
            height={400}
            layout='responsive'
            alt='pic'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <Link href='#slide4' className='btn btn-circle'>
              ❮
            </Link>
            <Link href='#slide2' className='btn btn-circle'>
              ❯
            </Link>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full min-h-[75%]'>
          <Image
            className='h-52'
            src='/images/BannerImage2.png'
            width={600}
            height={400}
            layout='responsive'
            alt='pic'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <Link href='#slide1' className='btn btn-circle'>
              ❮
            </Link>
            <Link href='#slide3' className='btn btn-circle'>
              ❯
            </Link>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full min-h-[75%]'>
          <Image
            className='h-52'
            src='/images/BannerImage4.png'
            width={600}
            height={400}
            layout='responsive'
            alt='pic'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <Link href='#slide2' className='btn btn-circle'>
              ❮
            </Link>
            <Link href='#slide4' className='btn btn-circle'>
              ❯
            </Link>
          </div>
        </div>
        <div id='slide4' className='carousel-item relative w-full min-h-[75%]'>
          <Image
            className='h-52'
            src='/images/BannerImage2.png'
            width={600}
            height={400}
            layout='responsive'
            alt='pic'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <Link href='#slide3' className='btn btn-circle'>
              ❮
            </Link>
            <Link href='#slide1' className='btn btn-circle'>
              ❯
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Banner;
