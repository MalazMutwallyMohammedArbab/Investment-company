import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from './Images'

export default function Industry() {
  return (
    <div className='shadow-md px-7 py-5 text-center bg-sky-100 rounded-3xl text-[#333]'>
      <Image className='w-12 h-12 m-auto' src='images/industry.jpg' alt='' />
      <div className='text-xl mb-2 font-medium'>قطاع الصناعة</div>
      <div className='text-lg mb-3'>من خلال توظيف رأس مالنا في صميم رؤية المملكة الاقتصادية 2030، نساعد في قيادة الطريق لاقتصاد وطني متنوع ومستدام</div>
      <div className='text-xl mb-2 font-medium'>الأعمال</div>
      <NavLink to='/maqayees'>
        <div className='text-lg'>شركة مصنع مقاييس الدقة للمعدات</div>
      </NavLink>
    </div>
  )
}
