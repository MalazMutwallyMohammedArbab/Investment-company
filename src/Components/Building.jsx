import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from './Images'

export default function Building() {
  return (
    <div className='shadow-md px-7 py-5 text-center bg-sky-100 rounded-3xl text-[#333]'>
      <Image className='w-12 h-12 m-auto' src='images/building.png' alt='' />
      <div className='text-xl mb-2 font-medium'>البناء والمقاولات</div>
      <div className='text-lg mb-3'>يشكل استثمارنا في قطاع البنية التحتية جزءا كبيرا من استراتيجيتنا لتحويل رؤية المملكة العربية السعودية 2030 إلى حقيقة واقعة</div>
      <div className='text-xl mb-2 font-medium'>الأعمال</div>
      <Image className='w-28 h-12 m-auto' src='images/atmid.jpg' alt='' />
      <NavLink to='/atmid'>
        <div className='text-lg'>شركة اعتمد المحدودة</div>
      </NavLink>
    </div>
  )
}
