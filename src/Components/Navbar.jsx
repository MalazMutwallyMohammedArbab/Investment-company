import React from 'react'
import Image from './Images'
import Navigation from './Navigation'

export default function Navbar() {
  return (
    <div className='bg-white'>
      <div className='py-3 px-9 flex justify-between items-center border-b'>
        <Image className='w-40 h-10' src='images/logo.jpg' alt='logo' />       
        <Navigation />
      </div>
    </div>
  )
}
