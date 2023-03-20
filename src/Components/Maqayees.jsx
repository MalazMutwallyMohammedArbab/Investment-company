import React from 'react'
import Image from './Images'

export default function Maqayees() {
  return (
    <div className='shadow-md block m-auto px-12 py-5 text-center bg-sky-100 rounded-3xl text-[#333] w-80 mb-20'>
      <Image className='w-28 m-auto' src='images/maqayeesD.jpg' alt='' />
      <div className='text-xl mb-2 font-medium'>شركة مصنع مقاييس الدقة للمعدات</div>
      <div className='text-lg mb-3'>شركة سعودية رائدة في إنتاج المعدات والأدوات الحديثة والتي تستخدم في إدارة النفايات الصلبة والسائلة الخطرة وغير الخطرة</div>
    </div>
  )
}
