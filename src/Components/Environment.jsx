import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from './Images'

export default function Environment() {
  return (
    <div className='shadow-md px-7 py-5 text-center bg-sky-100 rounded-3xl text-[#333]'>
      <Image className='w-12 h-12 m-auto rounded-[50%]' src='images/environment.jpg' alt='' />
      <div className='text-xl mb-2 font-medium'>الخدمات البيئية</div>
      <div className='text-lg mb-3'>حيث نعمل على إدارة وتقليل النفايات الناتجة عن التنظيف والتخلص منها بطريقة آمنة والعمل على استعادة الموارد ذات قيمة والتي تؤدي إلى المنتجات المعاد تدويرها والطاقة المتجددة في جميع أنحاء المملكة</div>
      <div className='text-xl mb-2 font-medium'>الأعمال</div>
      <Image className='w-28 h-12 m-auto' src='images/maqayees.jpg' alt='' />
      <NavLink to='/maqayeesEnv'>
        <div className='text-xl mt-2 text-sky-600'>شركة مقاييس الدقة</div>
      </NavLink>
    </div>
  )
}
