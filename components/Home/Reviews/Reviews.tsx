import { Star } from 'lucide-react'
import React from 'react'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return (
    <div className='mt-20 pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]'>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
            <div>
                <h1 className='text-2xl font-semibold text-white'>What our customers are saying...</h1>
                <p className='mt-6 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consectetur debitis dolorum aliquam quam illo, vel ab amet repudiandae fuga qui ad, numquam voluptate incidunt tenetur quasi provident dolore expedita.</p>
                <div className='mt-6 flex items-center space-x-6'>
                    <div>
                        <p className='text-2xl font-bold text-white'>4.88</p>
                        <p className='text-white mb-2 '>Overall Rating</p>
                        <div className='flex items-center'>
                            <Star className='text-white' />
                            <Star className='text-white' />
                            <Star className='text-white' />
                            <Star className='text-white' />
                            <Star className='text-white' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider */}
            <div className='overflow-hidden'>
                <ReviewSlider />
            </div>
        </div>
    </div>
  )
}

export default Reviews