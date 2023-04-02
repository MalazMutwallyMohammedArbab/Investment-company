import React from 'react'
import Image from './Images'

export default function Health() {
  return (
    <div className='shadow-md px-7 py-9 text-center bg-sky-100 rounded-3xl text-[#333]'>
      <Image className='w-12 h-12 m-auto rounded-[50%]' src='images/health.jpg' alt='' />
      <div className='text-xl mb-6 font-medium'>الرعاية الصحية</div>
      <Image className='w-28 h-12 m-auto' src='images/albait1.jpg' alt='' />
      <div className='text-xl mb-2 font-medium'>شركة البيت الطبية</div>
      <div className='text-lg'>شركة طبية تقدم مجموعة متنوعة من الخدمات والمنتجات المخصصة لعيادات الأسنان وأطباء الأسنان</div>
    </div>
  )
}
