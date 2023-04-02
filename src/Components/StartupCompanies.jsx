import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from './Images'

export default function StartupCompanies() {
  return (
    <div className='shadow-md px-7 py-5 text-center bg-sky-100 rounded-3xl text-[#333]'>
      <Image className='w-12 h-12 m-auto rounded-[50%]' src='images/startup.png' alt='' />
      <div className='text-xl mb-2 font-medium'>الشركات الناشئة</div>
      <div className='text-lg mb-3'>ترتكز استراتيجية الشركة على الاستثمار في إدارة وتطوير الشركات الناشئة وتقديم أوجه الدعم والتوجيه من خلال مراحل متعددة بكفاءة وفاعلية واحترافية موثوقة، ونقوم بالاستثمار في الشركات الآتية:-</div>
      <div className='text-xl mb-2 font-medium'>الأعمال</div>
      <NavLink to='/edfaa'>
        <div className='text-lg'>ادفع بي</div>
      </NavLink>
    </div>
  )
}
