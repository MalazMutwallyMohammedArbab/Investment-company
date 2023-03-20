import React from 'react'
import Image from './Images'

export default function Atimid() {
  return (
    <div className='shadow-md block m-auto px-12 py-5 text-center bg-sky-100 rounded-3xl text-[#333] w-80 mb-20'>
      <Image className='w-28 h-12 m-auto' src='images/atmid.jpg' alt='' />
      <div className='text-xl mb-2 font-medium'>شركة اعتمد المحدودة</div>
      <div className='text-lg mb-3'>شركة متخصصة في قطاع التوريدات العامة من الثلاجات والمبردات والأجهزة والمعدات في البنية التحتية</div>
    </div>
  )
}
