import React from 'react';
import Image from "./Images";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './header.css'

export default function Header() {
  return (
    <div className='mb-6'>
      <AliceCarousel className='mb-0' autoPlay autoPlayInterval='3000'>
        <div className='relative flex justify-center align-center'>
          <Image className='w-[100%] h-[600px] sliderimg' src='images/i6.jpg' alt='' />
          <Image className='w-56 h-40 absolute top-[5%] md:w-72 md:h-40' src='images/logo.png' alt='logo' />
          <div className='absolute top-[25%] text-6xl md:text-8xl text-white'>Atmiid</div>
          <div className='absolute top-[35%] text-3xl md:text-6xl md:top-[43%] text-white'>شركة اعتمد للاستثمار</div>
          <div className='absolute top-[40%] text-3xl md:text-6xl md:top-[55%] text-white'>Atmiid for Investments</div>
        </div>
        <div className='relative flex justify-center align-center'>
          <Image className='w-[100%] h-[600px] sliderimg' src='images/i7.jpg' alt='' />
          <Image className='w-56 h-40 absolute top-[5%] md:w-72 md:h-40' src='images/logo.png' alt='logo' />
          <div className='absolute top-[25%] text-6xl md:text-8xl text-white'>Atmiid</div>
          <div className='absolute top-[35%] text-3xl md:text-6xl md:top-[43%] text-white'>شركة اعتمد للاستثمار</div>
          <div className='absolute top-[40%] text-3xl md:text-6xl md:top-[55%] text-white'>Atmiid for Investments</div>
        </div>
        <div className='relative flex justify-center align-center'>
          <Image className='w-[100%] h-[600px] sliderimg' src='images/i3.jpeg' alt='' />
          <Image className='w-56 h-40 absolute top-[5%] md:w-72 md:h-40' src='images/logo.png' alt='logo' />
          <div className='absolute top-[25%] text-6xl md:text-8xl text-white'>Atmiid</div>
          <div className='absolute top-[35%] text-3xl md:text-6xl md:top-[43%] text-white'>شركة اعتمد للاستثمار</div>
          <div className='absolute top-[40%] text-3xl md:text-6xl md:top-[55%] text-white'>Atmiid for Investments</div>
        </div>
        <div className='relative flex justify-center align-center'>
          <Image className='w-[100%] h-[600px] sliderimg' src='images/b3.jpeg' alt='' />
          <Image className='w-56 h-40 absolute top-[5%] md:w-72 md:h-40' src='images/logo.png' alt='logo' />
          <div className='absolute top-[25%] text-6xl md:text-8xl text-white'>Atmiid</div>
          <div className='absolute top-[35%] text-3xl md:text-6xl md:top-[43%] text-white'>شركة اعتمد للاستثمار</div>
          <div className='absolute top-[40%] text-3xl md:text-6xl md:top-[55%] text-white'>Atmiid for Investments</div>
        </div>
      </AliceCarousel>
    </div>
  )
}
