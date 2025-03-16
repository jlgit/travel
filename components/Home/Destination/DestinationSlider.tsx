"use client"

import { destinationData } from '@/data/data';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'
import SectionHeading from '@/components/Helper/SectionHeading';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 4,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const DestinationSlider = () => {
    return (
        <>
        <SectionHeading heading="Exploring Propular Destination" subheading="Enjoy nature, meet peoples and cultures, find new places" />
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
        >
        {destinationData.map((data) =>{
            return (
            <div key={data.id} className='m-3'>
                <div className='relative h-[600px]'>
                    <div className='absolute inset-0 bg-black opacity-25 rounded-lg'></div>
                    <Image src={data.image} alt={data.country} width={500} height={500} className="h-full w-full object-cover rounded-lg" />
                </div>
                <h2 className='text-le font-semibold mt-4'>{data.country}</h2>
                <p className='text-sm text-gray-600'>{data.travelers} travelers</p>
            </div>
            );
        })}
        </Carousel>
        </>
  )
}

export default DestinationSlider