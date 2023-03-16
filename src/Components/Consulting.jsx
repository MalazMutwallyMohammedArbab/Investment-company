import React from 'react'

export default function Consulting() {
  return (
    <div dir='rtl' className='container mb-12 block m-auto'>
      <div className='mt-16 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[20px] py-3 px-5 w-[30%] m-auto text-center'>الاستشارات</div>
      <div className='px-7 lg:px-14 text-center text-lg lg:text-xl mt-5'>تقدم الشركة خدمات الاستشارات الإدارية والتطوير وخدمات الامتياز التجاري لكافة العلامات التجارية بشكل مستمر</div>
      <div className='mt-12 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[20px] py-3 px-5 w-[30%] m-auto text-center'>التدريب</div>
      <div className='text-start text-lg lg:text-xl pr-12 mt-5'>إعداد الحقائب التدريبية</div>
      <div className='text-start text-lg lg:text-xl pr-12 mt-5'>تصميم البرامج التدريبية</div>

      <div className='mt-12 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[20px] py-3 px-5 w-[50%] m-auto text-center'>الاستشارات الإدارية</div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-6 mt-6'>
        <div className='shadow-md px-7 py-5 text-center bg-sky-100 rounded-3xl text-[#333]'>
          <div className='text-xl mb-2 font-medium'>استراتيجية استشارات الأعمال:</div>
          <div className='text-lg mb-2'>دراسات الجدوى</div>
          <div className='text-lg mb-2'>تقييم الاستثمارات</div>
          <div className='text-lg mb-2'>إدارة المخاطر</div>
          <div className='text-lg mb-2'>تطوير المؤسسات والشركات</div>
        </div>

        <div className='shadow-md px-7 py-5 text-center bg-sky-100 rounded-3xl text-[#333]'>
          <div className='text-xl mb-2 font-medium'>استراتيجية مالية الشركات:</div>
          <div className='text-lg mb-2'>المساعدة في حلول التمويل</div>
          <div className='text-lg mb-2'>إعادة تشكيل رؤوس أموال الشركات</div>
          <div className='text-lg mb-2'>التقييم</div>
          <div className='text-lg mb-2'>مساعدة العملاء في تنفيذ عملية الدمج أو الاستحواذ</div>
        </div>

        <div className='shadow-md px-7 py-5 text-center bg-sky-100 rounded-3xl text-[#333]'>
          <div className='text-xl mb-2 font-medium'>استشارات العمليات:</div>
          <div className='text-lg mb-2'>دراسات السوق</div>
          <div className='text-lg mb-2'>تحسين العمليات</div>
          <div className='text-lg mb-2'>مراقبة الأداء</div>
        </div>

        <div className='shadow-md px-7 py-5 text-center bg-sky-100 rounded-3xl text-[#333]'>
          <div className='text-xl mb-2 font-medium'>استشارات الموارد البشرية:</div>
          <div className='text-lg mb-2'>تصميم الهيكلة الإدارية</div>
        </div>

        <div className='shadow-md px-7 py-5 text-center bg-sky-100 rounded-3xl text-[#333]'>
          <div className='text-xl mb-2 font-medium'>الامتياز التجاري (الفرنشايز):</div>
          <div className='text-lg mb-2'>إعداد أنظمة الامتياز التجاري</div>
          <div className='text-lg mb-2'>إعداد أدلة التشغيل</div>
          <div className='text-lg mb-2'>التسويق للعلامات التجارية</div>
          <div className='text-lg mb-2'>الاستشارات الخاصة بالامتياز التجاري</div>
        </div>
      </div>
    </div>
  )
}
