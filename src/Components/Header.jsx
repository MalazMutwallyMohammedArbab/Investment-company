import React from 'react';
import Image from "./Images";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './header.css'

export default function Header() {
  return (
    <div className='mb-12'>
      <AliceCarousel className='mb-0' autoPlay autoPlayInterval='2000'>
        <div className='relative flex justify-center align-center'>
          <Image className='w-[100%] h-[400px] sliderimg' src='images/i6.jpg' alt='' />
          <Image className='w-40 h-20 absolute top-[5%] md:w-48 md:h-28' src='images/logo.png' alt='logo' />
          <div className='absolute top-[25%] text-4xl lg:text-6xl text-white'>Atmiid</div>
          <div className='absolute top-[35%] text-xl md:text-3xl md:top-[43%] text-white'>شركة اعتمد للاستثمار</div>
          <div className='absolute top-[40%] text-xl md:text-3xl md:top-[50%] text-white'>Atmiid for Investments</div>
        </div>
        <div className='relative flex justify-center align-center'>
          <Image className='w-[100%] h-[400px] sliderimg' src='images/i7.jpg' alt='' />
          <Image className='w-40 h-20 absolute top-[5%] md:w-48 md:h-28' src='images/logo.png' alt='logo' />
          <div className='absolute top-[25%] text-4xl md:text-6xl text-white'>Atmiid</div>
          <div className='absolute top-[35%] text-xl md:text-3xl md:top-[43%] text-white'>شركة اعتمد للاستثمار</div>
          <div className='absolute top-[40%] text-xl md:text-3xl md:top-[50%] text-white'>Atmiid for Investments</div>
        </div>
        <div className='relative flex justify-center align-center'>
          <Image className='w-[100%] h-[400px] sliderimg' src='images/i4.jpg' alt='' />
          <Image className='w-40 h-20 absolute top-[5%] md:w-48 md:h-28' src='images/logo.png' alt='logo' />
          <div className='absolute top-[25%] text-4xl md:text-6xl text-white'>Atmiid</div>
          <div className='absolute top-[35%] text-xl md:text-3xl md:top-[43%] text-white'>شركة اعتمد للاستثمار</div>
          <div className='absolute top-[40%] text-xl md:text-3xl md:top-[50%] text-white'>Atmiid for Investments</div>
        </div>
        <div className='relative flex justify-center align-center'>
          <Image className='w-[100%] h-[400px] sliderimg' src='images/i3.jpeg' alt='' />
          <Image className='w-40 h-20 absolute top-[5%] md:w-48 md:h-28' src='images/logo.png' alt='logo' />
          <div className='absolute top-[25%] text-4xl md:text-6xl text-white'>Atmiid</div>
          <div className='absolute top-[35%] text-xl md:text-3xl md:top-[43%] text-white'>شركة اعتمد للاستثمار</div>
          <div className='absolute top-[40%] text-xl md:text-3xl md:top-[50%] text-white'>Atmiid for Investments</div>
        </div>
      </AliceCarousel>
    </div>
  )
}