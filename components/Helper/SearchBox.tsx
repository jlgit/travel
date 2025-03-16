import { Calendar, MapIcon, Users } from 'lucide-react'
import React from 'react'

const SearchBox = () => {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 inset-1 
    items-center justify-center gap-8 mt-4 sm:mt-12 w-[90%] sm:w-[80%]'>
        <div className='flex items-center space-x-6'>
            <MapIcon className='w-6 h-6 text-blue-600' />
            <div>
                <p className='text-lg font-medium md-[0.2rem]'>
                    Location
                </p>
                <input type="text" placeholder="Where are you going" className='outline-none border-none placeholder:text-gray-800' />
            </div>
        </div>
        <div className='flex items-center space-x-6'>
            <Calendar className='w-6 h-6 text-blue-600' />
            <div>
                <p className='text-lg font-medium md-[0.2rem]'>
                    Start Date
                </p>
                <input type="date" className='outline-none border-none placeholder:text-gray-800' />
            </div>
        </div>
        <div className='flex items-center space-x-6'>
            <Calendar className='w-6 h-6 text-blue-600' />
            <div>
                <p className='text-lg font-medium md-[0.2rem]'>
                    End Date
                </p>
                <input type="date" className='outline-none border-none placeholder:text-gray-800' />
            </div>
        </div>
        <div className='flex items-center space-x-6'>
            <Users className='w-6 h-6 text-blue-600' />
            <div>
                <p className='text-lg font-medium md-[0.2rem]'>
                    Guests
                </p>
                <p className='text-base font-normal'>1 Guest 1 Room</p>
            </div>
        </div>
    </div>
  )
}

export default SearchBox