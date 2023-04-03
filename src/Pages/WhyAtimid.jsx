import React from 'react';
import Image from "../Components/Images";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function WhyAtimid() {
  return (
    <div className='bg-[#FFFACD] pt-20 pb-2'>
    <div className='container block mx-auto mb-20 shadow py-4 rounded-[40px] border border-sky-100 w-[80%] lg:w-[60%] bg-white'>
      <div className='text-sky-400 font-medium text-[28px] text-center border-b-2 border-sky-100'>لماذا اعتمد للاستثمار؟</div>
      <div className='m-auto mx-9 mt-9'>
      <AliceCarousel className='mb-0' autoPlay autoPlayInterval='2000'>
        <div className='shadow-xl text-center pb-6 sliderimg bg-sky-100'>
          <Image className='w-40 h-20 md:w-48 md:h-28 m-auto' src='images/logo.png' alt='logo' />
          <div className='text-2xl md:text-4xl'>طريقة عمل مبتكرة</div>
          <div className='text-md md:text-xl mt-4 px-3 md:w-[80%] m-auto'>نعمل وفق طريقة عمل مبتكرة تركز على الجانب العملي وتطبيق أفضل الممارسات العالمية، مع الالتزام بالوقت والعمل الجاد</div>
        </div>
        <div className='shadow sliderimg pb-6 text-center h-72 bg-sky-100'>
          <Image className='w-40 h-20 md:w-48 md:h-28 m-auto' src='images/logo.png' alt='logo' />
          <div className='text-2xl md:text-4xl'>القدرة على الاستثمار</div>
          <div className='text-md md:text-xl mt-4 px-3 md:w-[80%] m-auto'>يمتلك فريقنا القدرات والخبرات الازمة في مختلف الاستثمارات والمشاريع الاستراتيجية مع سجل منجزات حافل في التنفيذ الأمثل للمهام</div>
        </div>
        <div className='shadow-xl text-center pb-6 sliderimg bg-sky-100'>
          <Image className='w-40 h-20 md:w-48 md:h-28 m-auto' src='images/logo.png' alt='logo' />
          <div className='text-2xl md:text-4xl'>العمق المحلي</div>
          <div className='text-md md:text-xl mt-4 px-3 md:w-[80%] m-auto'>عند تقديم منتجاتنا وحلولنا الاستثمارية، فإننا نأخذ بالاعتبار معرفتنا وخبرتنا المحلية وبالتالي نساهم في نشر المهارات والمعرفة من خلال العمل كامتداد لفريق العميل</div>
        </div>
        <div className='shadow sliderimg pb-6 text-center h-72 bg-sky-100'>
          <Image className='w-40 h-20 md:w-48 md:h-28 m-auto' src='images/logo.png' alt='logo' />
          <div className='text-2xl md:text-4xl'>بيئة عمل جاذبة</div>
          <div className='text-md md:text-xl mt-4 px-3 md:w-[80%] m-auto'>فريقنا يعمل في بيئة إبداعية جاذبة لأفضل الكفاءات في مجال الاستشارات الإدارية والمهنية</div>
        </div>
        <div className='shadow-xl text-center pb-6 sliderimg bg-sky-100 '>
          <Image className='w-40 h-20 md:w-48 md:h-28 m-auto' src='images/logo.png' alt='logo' />
          <div className='text-2xl md:text-4xl'>توحيد المصالح المشتركة</div>
          <div className='text-md md:text-xl mt-4 px-3 md:w-[80%] m-auto'>تحقيق الأداء المتميز هو دافعنا، فبالتالي فإن رسوم خدماتنا تعكس منهجنا. وكذلك تعد إدارتنا حاليا هي أكبر مساهم في الشركة. ولذلك، فإن مصالح عملاء وشركاء الشركة تعد مصالحها. ومنهجية العمل لدينا قائمة على تحقيق النتائج</div>
        </div>
        <div className='shadow sliderimg pb-6 text-center bg-sky-100'>
          <Image className='w-40 h-20 md:w-48 md:h-28 m-auto' src='images/logo.png' alt='logo' />
          <div className='text-2xl md:text-4xl'>المصداقية والثقة</div>
          <div className='text-md md:text-xl mt-4 px-3 md:w-[80%] m-auto'>حيث نسعى إلى بناء علاقات عمل وثيقة وبناءة طويلة الأمد مع شركائنا التجاريين، هذه العلاقات يجب أن تكون مبنية على مجموعة من القيم الثابتة، وأهمها الثقة والمصداقية والنزاهة والمصلحة المشتركة</div>
        </div>
      </AliceCarousel>
      </div>
    </div>
    </div>
  )
}
