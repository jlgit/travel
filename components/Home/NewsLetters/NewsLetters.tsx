import { Mail } from 'lucide-react'
import React from 'react'

const NewsLetters = () => {
  return (
    <div className='bg-black pt-16 pb-16 flex items-center justify-center w-full flex-col'>
        <Mail className='w-16 h-16 text-white' />
        <h1 className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest'>Your Journey Starts Here</h1>
        <p className='mt-3 text-white text-xs sm:text-sm'>Sign up and we will send you the best deals!</p>
        <div className='w-full'>
            <input type="text" className='px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[50%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none' placeholder='Email' />
            <button  className='px-6 py-3.5 hover:bg-blue-950 text-white bg-blue-900 transition-all duration-200 mt-3 w-[95%] sm:w-[50%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetters
