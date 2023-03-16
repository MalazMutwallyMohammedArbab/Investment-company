import React from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
  return (
    <div dir='rtl' className='container mb-20 block m-auto'>
      <div className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[20px] py-3 px-5 w-[30%] m-auto text-center'>نبذة عنا</div>
      <div className='px-7 lg:px-14 text-center text-lg lg:text-xl mt-5'>شركة رائدة متخصصة في الاستثمارات البديلة، حيث نستثمر في الشركات الناشئة ونعمل على دعمها وتطويرها، وتضم الشركة نخبة من الكوادر الوطنية ذات الخبرات العالية المبدعة في مجال إدارة وتطوير الشركات والمصانع، ونتطلع دائما لحلول فريدة ومتميزة بعيدا عن الحلول والخدمات التقليدية. كما نقوم بإدارة وتطوير العديد من الشركات تحت عدة قطاعات متنوعة منها:</div>
      <div className='grid grid-cols-3 gap-3 mt-9 w-[90%] mx-auto'>
        <NavLink to='/industry'>
          <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[17px] w-[110px] py-1 text-center'>قطاع الصناعة</button>
        </NavLink>
        <NavLink to='/environment'>
          <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[17px] w-[110px] py-1 text-center'>الخدمات البيئية</button>
        </NavLink>
        <NavLink to='/builing'>
          <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[16px] w-[110px] py-1 text-center'>البناء والمقاولات</button>
        </NavLink>
        <NavLink to='/startup'>
          <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[17px] w-[110px] py-1 text-center'>الشركات الناشئة</button>
        </NavLink>
        <NavLink to='/health'>
          <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[17px] w-[110px] py-1 text-center'>الرعاية الصحية</button>
        </NavLink>
        <NavLink to='/whatWeDo'>
          <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[16px] w-[110px] py-1 text-center'>العلامات التجارية</button>
        </NavLink>
        <NavLink to='/consulting'>
          <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[17px] w-[110px] py-1 text-center'>الاستشارات</button>
        </NavLink>
        <NavLink to='/whatWeDo'>
          <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[17px] w-[110px] py-1 text-center'>مرافق الطاقة</button>
        </NavLink>
      </div>
    </div>
  )
}
