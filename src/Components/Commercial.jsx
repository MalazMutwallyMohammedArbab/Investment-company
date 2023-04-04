import React from 'react';
import Image from './Images';

export default function Commercial() {
  return (
    <div className='shadow-md px-7 py-5 text-center bg-sky-100 rounded-3xl text-[#333]'>
      <Image className='w-14 h-12 m-auto rounded-[50%]' src='images/trademarks1.jpg' alt='' />
      <div className='text-xl mb-6 font-medium'>العلامات التجارية</div>
      <Image className='w-28 h-12 m-auto' src='images/dndn.jpg' alt='' />
      <div className='text-xl mb-2 font-medium'>أسواق دندن للمواد الغذائية</div>
      <div className='text-lg mb-3'>شركة سعودية قائمة ولديها علامة تجارية مميزة، وتعمل في مجال التموينات والبقالات، وتلبية أصحاب البقالات من مشتريات المواد الغذائية، تبيع جملة وتجزئة في المواد الغذائية ولديها منتجاتها الحصرية.</div>
      <a href="https://dndnksa.com/" rel="noreferrer noopener" target="_blank" className='text-sky-600 text-xl'>انتقل إلى الموقع</a>
    </div>
  )
}
