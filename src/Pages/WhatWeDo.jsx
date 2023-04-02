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
    <div dir='rtl' className='mb-20 py-4 rounded-[40px] container m-auto w-[90%] bg-white shadow'>
      <div className='text-sky-400 font-medium text-[28px] text-center border-b-2 border-sky-100 mb-7'>ما الذي نفعله</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6'>
        <Commercial />
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
