import React from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
  return (
    <div dir='rtl' className='container mb-20 block m-auto shadow py-4 rounded-[40px] w-[90%] md:w-[50%] bg-white'>
      <div className='text-sky-400 font-medium text-[28px] text-center border-b-2 border-sky-100'>نــبــذة عــنــا</div>
      <div className='px-4 lg:px-14 text-center text-lg lg:text-xl mt-5'>شركة رائدة متخصصة في الاستثمارات البديلة، حيث نستثمر في الشركات الناشئة ونعمل على دعمها وتطويرها، وتضم الشركة نخبة من الكوادر الوطنية ذات الخبرات العالية المبدعة في مجال إدارة وتطوير الشركات والمصانع، ونتطلع دائما لحلول فريدة ومتميزة بعيدا عن الحلول والخدمات التقليدية. كما نقوم بإدارة وتطوير العديد من الشركات تحت عدة قطاعات متنوعة منها:</div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 mt-7 mb-6 mr-4 lg:mr-8'>
        <NavLink to='/industry'>
          <button className='text-[#333] bg-sky-100 shadow-md font-medium rounded-lg w-[150px] py-1 text-center text-lg'>قطاع الصناعة</button>
        </NavLink>
        <NavLink to='/environment'>
          <button className='text-[#333] bg-sky-100 shadow-md font-medium rounded-lg w-[150px] py-1 text-center text-lg'>الخدمات البيئية</button>
        </NavLink>
        <NavLink to='/builing'>
          <button className='text-[#333] bg-sky-100 shadow-md font-medium rounded-lg w-[150px] py-1 text-center text-lg'>البناء والمقاولات</button>
        </NavLink>
        <NavLink to='/startup'>
          <button className='text-[#333] bg-sky-100 shadow-md font-medium rounded-lg w-[150px] py-1 text-center text-lg'>الشركات الناشئة</button>
        </NavLink>
        <NavLink to='/health'>
          <button className='text-[#333] bg-sky-100 shadow-md font-medium rounded-lg w-[150px] py-1 text-center text-lg'>الرعاية الصحية</button>
        </NavLink>
        <NavLink to='/commercial'>
          <button className='text-[#333] bg-sky-100 shadow-md font-medium rounded-lg w-[150px] py-1 text-center text-lg'>العلامات التجارية</button>
        </NavLink>
        <NavLink to='/consulting'>
          <button className='text-[#333] bg-sky-100 shadow-md font-medium rounded-lg w-[150px] py-1 text-center text-lg'>الاستشارات</button>
        </NavLink>
        <NavLink to='/whatWeDo'>
          <button className='text-[#333] bg-sky-100 shadow-md font-medium rounded-lg w-[150px] py-1 text-center text-lg'>مرافق الطاقة</button>
        </NavLink>
      </div>
    </div>
  )
}
