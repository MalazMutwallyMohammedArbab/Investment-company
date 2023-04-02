import React from 'react';
import Image from "./Images";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './header.css'

export default function Header() {
  return (
    <div className='pb-6'>
      <AliceCarousel className='mb-0' autoPlay autoPlayInterval='3000'>
        <div className='relative flex justify-center align-center mt-7'>
          <Image className='w-[90%] h-[500px] sliderimg rounded-[40px]' src='images/bu1.jpg' alt='' />
          <Image className='w-80 h-24 absolute top-[5%] md:w-[50%]' src='images/logo.png' alt='logo' />
          <div className='absolute top-[24%] text-3xl md:text-6xl md:top-[25%] text-white'>شركـــة اعتــمــد للاسـتـثمـار</div>
          <div className='absolute top-[33%] text-3xl md:text-6xl md:top-[41%] text-white'>Atmiid for Investments</div>
        </div>
        <div className='relative flex justify-center align-center mt-7'>
          <Image className='w-[90%] h-[500px] sliderimg rounded-[40px]' src='images/bu2.jpg' alt='' />
          <Image className='w-80 h-24 absolute top-[5%] md:w-[50%]' src='images/logo.png' alt='logo' />
          <div className='absolute top-[24%] text-3xl md:text-6xl md:top-[25%] text-white'>شركـــة اعتــمــد للاسـتـثمـار</div>
          <div className='absolute top-[33%] text-3xl md:text-6xl md:top-[41%] text-white'>Atmiid for Investments</div>
        </div>      
        <div className='relative flex justify-center align-center mt-7'>
          <Image className='w-[90%] h-[500px] sliderimg rounded-[40px]' src='images/bu3.jpg' alt='' />
          <Image className='w-80 h-24 absolute top-[5%] md:w-[50%]' src='images/logo.png' alt='logo' />
          <div className='absolute top-[24%] text-3xl md:text-6xl md:top-[25%] text-white'>شركـــة اعتــمــد للاسـتـثمـار</div>
          <div className='absolute top-[33%] text-3xl md:text-6xl md:top-[41%] text-white'>Atmiid for Investments</div>
        </div>
        <div className='relative flex justify-center align-center mt-7'>
          <Image className='w-[90%] h-[500px] sliderimg rounded-[40px]' src='images/bu4.jpg' alt='' />
          <Image className='w-80 h-24 absolute top-[5%] md:w-[50%]' src='images/logo.png' alt='logo' />
          <div className='absolute top-[24%] text-3xl md:text-6xl md:top-[25%] text-white'>شركـــة اعتــمــد للاسـتـثمـار</div>
          <div className='absolute top-[33%] text-3xl md:text-6xl md:top-[41%] text-white'>Atmiid for Investments</div>
        </div>
      </AliceCarousel>
    </div>
  )
}
