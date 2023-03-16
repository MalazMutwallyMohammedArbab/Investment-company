import React from 'react';
import Image from '../Components/Images';

export default function Contact() {
  return (
    <div dir='rtl'>
      <div className='mb-16 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[20px] py-3 px-5 w-[40%] mx-auto text-center'>تواصل معنا</div>
      <Image className='w-40 m-auto' src='images\logo.jpg' alt='' />
      <div className='text-2xl md:text-4xl text-center mt-5'>Atmiid</div>
      <div className='text-lg md:text-xl text-center'>شركة اعتمد للاستثمار</div>
      <div className='text-lg md:text-xl text-center mb-7'>Atmiid for Investments</div>

      <a href="tel:+966541232341" className='flex justify-center'>
        <div className='mb-2'>00966541232341</div>
        <Image className='h-5' src='images/phone.png' alt='img' />
      </a>

      <a href='mailto:Sultan@atmiid.com' target='_blank' rel='noopener noreferrer' className='flex justify-center'>
        <div className='mb-2'>Sultan@atmiid.com</div>
        <Image className='h-5' src='images/email.png' alt='img' />
      </a>

      <a href="http://www.atmiidinvestment.com/" rel="noreferrer noopener" target="_blank" className='flex justify-center'>
        <div className='mb-2'>www.atmiidinvestment.com</div>
        <Image className='h-5' src='images/web2.png' alt='img' />
      </a>

      <div className='flex justify-center mx-6 mb-16'>
        <div className=''>الرياض- 4519 طريق صلاح الدين الأيوبي- حي الصفا 8643</div>
        <Image className='h-5' src='images/location2.jpg' alt='img' />
      </div>
    </div>
  )
}
