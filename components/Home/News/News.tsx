import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className='w-[80%] mx-auto pt-16 pb-16'>
        <SectionHeading heading="Exiting Travel News" subheading="All you need to now to plan your travel with us" />
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20'>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                <NewsCard image="/images/n1.jpg" title="Places to visit in Autralia" date="15 Nov 2024" />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <NewsCard image="/images/n2.jpg" title="Places to visit in Bahamas" date="10 Nov 2024" />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <NewsCard image="/images/n3.jpg" title="Places to visit in Miami" date="5 Nov 2024" />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <NewsCard image="/images/n4.jpg" title="Places to visit in Florida Keys" date="1 Nov 2024" />
            </div>
        </div>
    </div>
  )
}

export default News