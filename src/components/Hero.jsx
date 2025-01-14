import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto'>
    <div className='flex flex-col gap-4'>
        <p className='text-xl sm:text-base md:text-lg'>FIND YOUR TRUE STRENGTH WITH</p>
        <h1 className='uppercase font-semibold text-6xl sm:text-7xl md:text-8xl lg:text-9xl'>AR<span className='text-blue-400 font-medium'>GAINZ</span></h1>
    </div>
        <p className='text-lg font-light'>I acknowledge and accept all terms that I may become an <span className='text-blue-400 font-medium'>almighty powerful</span> individual with my Argainz, an <span className='text-blue-400 font-medium'>evolved form</span> of ordinary gains. With great Argainz, comes great responsibility. Click below to begin</p>
        <Button func={() => {
          window.location.href = '#generate'
        }} text={"Accept & Begin"}></Button>
    </div>
  )
}
