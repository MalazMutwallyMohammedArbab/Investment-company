import React from 'react';
import Image from "../Components/Images";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function WhyAtimid() {
  return (
    <div className='container block mx-auto mb-20'>
      <div className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[16px] py-3 px-5 w-[50%] m-auto text-center'>لماذا اعتمد للاستثمار؟</div>
      <div className='m-auto mx-9 lg:mx-48 mt-9'>
      <AliceCarousel className='mb-0' autoPlay autoPlayInterval='2000'>
        <div className='shadow-xl text-center pb-6 sliderimg bg-sky-100 h-72'>
          <Image className='w-40 h-20 md:w-48 md:h-28 m-auto' src='images/logo.png' alt='logo' />
          <div className='text-2xl md:text-4xl'>طريقة عمل مبتكرة</div>
          <div className='text-md md:text-xl mt-4 px-3'>نعمل وفق طريقة عمل مبتكرة تركز على الجانب العملي وتطبيق أفضل الممارسات العالمية، مع الالتزام بالوقت والعمل الجاد</div>
        </div>
        <div className='shadow sliderimg pb-6 text-center h-72 bg-sky-100'>
          <Image className='w-40 h-20 md:w-48 md:h-28 m-auto' src='images/logo.png' alt='logo' />
          <div className='text-2xl md:text-4xl text-black'>القدرة على الاستثمار</div>
          <div className='text-md md:text-xl text-black mt-4 px-3'>يمتلك فريقنا القدرات والخبرات الازمة في مختلف الاستثمارات والمشاريع الاستراتيجية مع سجل منجزات حافل في التنفيذ الأمثل للمهام</div>
        </div>
        <div className='shadow-xl text-center pb-6 sliderimg bg-sky-100 h-72'>
          <Image className='w-40 h-20 md:w-48 md:h-28 m-auto' src='images/logo.png' alt='logo' />
          <div className='text-2xl md:text-4xl'>العمق المحلي</div>
          <div className='text-md md:text-xl mt-4 px-3'>عند تقديم منتجاتنا وحلولنا الاستثمارية، فإننا نأخذ بالاعتبار معرفتنا وخبرتنا المحلية وبالتالي نساهم في نشر المهارات والمعرفة من خلال العمل كامتداد لفريق العميل</div>
        </div>
        <div className='shadow sliderimg pb-6 text-center h-72 bg-sky-100'>
          <Image className='w-40 h-20 md:w-48 md:h-28 m-auto' src='images/logo.png' alt='logo' />
          <div className='text-2xl md:text-4xl text-black'>بيئة عمل جاذبة</div>
          <div className='text-md md:text-xl text-black mt-4 px-3'>فريقنا يعمل في بيئة إبداعية جاذبة لأفضل الكفاءات في مجال الاستشارات الإدارية والمهنية</div>
        </div>
        <div className='shadow-xl text-center pb-6 sliderimg bg-sky-100 h-72'>
          <Image className='w-40 h-20 md:w-48 md:h-28 m-auto' src='images/logo.png' alt='logo' />
          <div className='text-2xl md:text-4xl'>توحيد المصالح المشتركة</div>
          <div className='text-md md:text-xl mt-4 px-3'>تحقيق الأداء المتميز هو دافعنا، فبالتالي فإن رسوم خدماتنا تعكس منهجنا. وكذلك تعد إدارتنا حاليا هي أكبر مساهم في الشركة. ولذلك، فإن مصالح عملاء وشركاء الشركة تعد مصالحها. ومنهجية العمل لدينا قائمة على تحقيق النتائج</div>
        </div>
        <div className='shadow sliderimg pb-6 text-center h-72 bg-sky-100'>
          <Image className='w-40 h-20 md:w-48 md:h-28 m-auto' src='images/logo.png' alt='logo' />
          <div className='text-2xl md:text-4xl text-black'>المصداقية والثقة</div>
          <div className='text-md md:text-xl text-black mt-4 px-3'>حيث نسعى إلى بناء علاقات عمل وثيقة وبناءة طويلة الأمد مع شركائنا التجاريين، هذه العلاقات يجب أن تكون مبنية على مجموعة من القيم الثابتة، وأهمها الثقة والمصداقية والنزاهة والمصلحة المشتركة</div>
        </div>
      </AliceCarousel>
      </div>
    </div>
  )
}
