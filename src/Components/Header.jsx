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
          <Image className='w-80 h-40 absolute top-[5%] md:w-[50%]' src='images/logo.png' alt='logo' />
          <div className='absolute top-[27%] text-3xl md:text-6xl md:top-[30%] text-white'>شركـــة اعتــمــد للاسـتـثمار</div>
          <div className='absolute top-[33%] text-3xl md:text-6xl md:top-[41%] text-white'>Atmiid for Investments</div>
        </div>
        <div className='relative flex justify-center align-center'>
          <Image className='w-[100%] h-[600px] sliderimg' src='images/i7.jpg' alt='' />
          <Image className='w-80 h-40 absolute top-[5%] md:w-[50%]' src='images/logo.png' alt='logo' />
          <div className='absolute top-[27%] text-3xl md:text-6xl md:top-[30%] text-white'>شركـــة اعتــمــد للاسـتـثمار</div>
          <div className='absolute top-[33%] text-3xl md:text-6xl md:top-[41%] text-white'>Atmiid for Investments</div>
        </div>
        <div className='relative flex justify-center align-center'>
          <Image className='w-[100%] h-[600px] sliderimg' src='images/i3.jpeg' alt='' />
          <Image className='w-80 h-40 absolute top-[5%] md:w-[50%]' src='images/logo.png' alt='logo' />
          <div className='absolute top-[27%] text-3xl md:text-6xl md:top-[30%] text-white'>شركـــة اعتــمــد للاسـتـثمار</div>
          <div className='absolute top-[33%] text-3xl md:text-6xl md:top-[41%] text-white'>Atmiid for Investments</div>
        </div>
        <div className='relative flex justify-center align-center'>
          <Image className='w-[100%] h-[600px] sliderimg' src='images/b3.jpeg' alt='' />
          <Image className='w-80 h-40 absolute top-[5%] md:w-[50%]' src='images/logo.png' alt='logo' />
          <div className='absolute top-[27%] text-3xl md:text-6xl md:top-[30%] text-white'>شركـــة اعتــمــد للاسـتـثمار</div>
          <div className='absolute top-[33%] text-3xl md:text-6xl md:top-[41%] text-white'>Atmiid for Investments</div>
        </div>
      </AliceCarousel>
    </div>
  )
}
