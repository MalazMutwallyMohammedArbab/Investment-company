import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from './Images'

export default function Environment() {
  return (
    <div className='shadow-md px-7 py-5 text-center bg-sky-100 rounded-3xl text-[#333]'>
      <Image className='w-12 h-12 m-auto' src='images/environment.jpg' alt='' />
      <div className='text-xl mb-2 font-medium'>الخدمات البيئية</div>
      <div className='text-lg mb-3'>حيث نعمل على إدارة وتقليل النفايات الناتجة عن التنظيف والتخلص منها بطريقة آمنة والعمل على استعادة الموارد ذات قيمة والتي تؤدي إلى المنتجات المعاد تدويرها والطاقة المتجددة في جميع أنحاء المملكة</div>
      <div className='text-xl mb-2 font-medium'>الأعمال</div>
      <NavLink to='/maqayeesEnv'>
        <div className='text-lg'>شركة مصنع مقاييس الدقة</div>
      </NavLink>
    </div>
  )
}
