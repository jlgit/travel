import { hotelsData } from '@/data/data'
import React from 'react'
import HotelCard from './HotelCard'
import SectionHeading from '@/components/Helper/SectionHeading'

const Hotels = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <SectionHeading heading="Recomended Hotels" subheading="Find the best hotels no matter your destination" />
            <div className='w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-5'>
                {hotelsData.map((data,i) => {
                    return <div key={data.id} data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={`${i*100}`}>
                        <HotelCard hotel={data} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Hotels