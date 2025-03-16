"use client"

import React, { useEffect } from 'react'
import Hero from './Hero'
import Destination from './Destination/Destination'
import WhyChoose from './WhyChoose/WhyChoose'
import Reviews from './Reviews/Reviews'
import News from './News/News'
import NewsLetters from './NewsLetters/NewsLetters'
import Hotels from './Hotels/Hotels'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const HomeArea = () => {

  useEffect(() => {
    const initAOS = async() => {
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once:true,
        anchorPlacement: 'top-bottom'
      });
    };
    initAOS();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Destination />
      <Hotels />
      <WhyChoose />
      <Reviews />
      <News />
      <NewsLetters />
    </div>
  )
}

export default HomeArea