import React from 'react';
import Image from '../Components/Images';

export default function Contact() {
  return (
    <div className='bg-[#f8f8f8] pt-14 pb-16'>
    <div dir='rtl' className='container shadow py-4 rounded-[40px] m-auto w-[90%] md:w-[50%] bg-white'>
      <div className='text-sky-400 font-medium text-[28px] text-center border-b-2 border-sky-100 mb-6 pb-3'>تواصل معنا</div>
      <Image className='w-40 m-auto' src='images\logo.jpg' alt='' />
      <div className='text-2xl md:text-4xl text-center mt-5'>Atmiid</div>
      <div className='text-lg md:text-xl text-center'>شركة اعتمد للاستثمار</div>
      <div className='text-lg md:text-xl text-center mb-7'>Atmiid for Investments</div>

      <a href="tel:+966500407080" className='flex justify-center'>
        <div className='mb-2 md:text-xl'>00966500407080</div>
        <Image className='h-5 md:h-6' src='images/phone.png' alt='img' />
      </a>

      <a href='mailto:Sultan@atmiid.com' target='_blank' rel='noopener noreferrer' className='flex justify-center'>
        <div className='mb-2 md:text-xl'>Sultan@atmiid.com</div>
        <Image className='h-5 md:h-6' src='images/email.png' alt='img' />
      </a>

      <a href="http://atmiid.com/" rel="noreferrer noopener" target="_blank" className='flex justify-center'>
        <div className='mb-2 md:text-xl'>atmiid.com</div>
        <Image className='h-5 md:h-6' src='images/web2.png' alt='img' />
      </a>

      <div className='flex justify-center mx-6 mb-12'>
        <div className='md:text-xl'>الرياض- العليا تقاطع العروبة</div>
        <Image className='h-5 md:h-6' src='images/location2.jpg' alt='img' />
      </div>
    </div>
    </div>
  )
}
