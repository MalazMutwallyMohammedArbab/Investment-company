import React from 'react'
import Building from '../Components/Building'
import Commercial from '../Components/Commercial'
import Consulting from '../Components/Consulting'
import Energy from '../Components/Energy'
import Environment from '../Components/Environment'
import Health from '../Components/Health'
import Industry from '../Components/Industry'
import StartupCompanies from '../Components/StartupCompanies'

export default function WhatWeDo() {
  return (
    <div dir='rtl' className='mb-20  py-4 rounded-[40px] container m-auto  border border-sky-500 w-[80%] md:w-[90%] bg-[#f8f8f8]'>
      <div className='text-white bg-sky-500 font-medium rounded-lg text-[19px] py-3 px-5 w-fit m-auto text-center mb-7'>ما الذي نفعله</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6'>
        <Industry />
        <Environment />
        <Building />
        <StartupCompanies />
        <Health />
      </div>
      <Consulting />
    </div>
  )
}
