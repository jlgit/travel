import { Facebook, Github, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Company</h1>
                <p className='text-gray-800 font-medium text-sm hover:text-blue-950'>
                    <Link href="about">About Us</Link>
                </p>
                <p className='text-gray-800 font-medium text-sm hover:text-blue-950'>
                    <Link href="careers">Careers</Link>
                </p>
                <p className='text-gray-800 font-medium text-sm hover:text-blue-950'>
                    <Link href="blog">Blog</Link>
                </p>
                <p className='text-gray-800 font-medium text-sm hover:text-blue-950'>
                    <Link href="giftcards">Gift cards</Link>
                </p>
                <p className='text-gray-800 font-medium text-sm hover:text-blue-950'>
                    <Link href="magazine">Magazine</Link>
                </p>
            </div>
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Support</h1>
                <p className='text-gray-800 font-medium text-sm hover:text-blue-950'>
                    <Link href="contact">Contact</Link>
                </p>
                <p className='text-gray-800 font-medium text-sm hover:text-blue-950'>
                    <Link href="notice">Legal Notice</Link>
                </p>
                <p className='text-gray-800 font-medium text-sm hover:text-blue-950'>
                    <Link href="privacy">Privacy Policy</Link>
                </p>
                <p className='text-gray-800 font-medium text-sm hover:text-blue-950'>
                    <Link href="terms">Terms & Conditions</Link>
                </p>
                <p className='text-gray-800 font-medium text-sm hover:text-blue-950'>
                    <Link href="sitemap">Sitemap</Link>
                </p>
            </div>
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Other Services</h1>
                <p className='text-gray-800 font-medium text-sm hover:text-blue-950'>
                    <Link href="cars">Car hire</Link>
                </p>
                <p className='text-gray-800 font-medium text-sm hover:text-blue-950'>
                    <Link href="activities">Activity Finder</Link>
                </p>
                <p className='text-gray-800 font-medium text-sm hover:text-blue-950'>
                    <Link href="tuors">Tuor List</Link>
                </p>
                <p className='text-gray-800 font-medium text-sm hover:text-blue-950'>
                    <Link href="flights">Flight Finder</Link>
                </p>
                <p className='text-gray-800 font-medium text-sm hover:text-blue-950'>
                    <Link href="agents">Travel Agents</Link>
                </p>
            </div>
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Contact Us</h1>
                <div className='mt-6'>
                    <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
                    <h1 className='text-base font-bold text-blue-900 mt-1'>305 623 5874</h1>
                </div>
                <div className='mt-6'>
                    <h1 className='text-sm text-gray-600'>Our Email</h1>
                    <h1 className='text-base font-bold text-blue-900 mt-1'>info@test.com</h1>
                </div>
            </div>
        </div>
        <div className='mt-8 w-[80%] mx-auto border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-800 text-sm'>
            <p className='text-center md:text-left'>Copyright &copy; 2025. All rights reserved</p>
            <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                <span>Social:</span>
                <Link href="http://x.com" className='text-gray-500 hover:text-blue-800'>
                    <Twitter />
                </Link>
                <Link href="http://facebook.com" className='text-gray-500 hover:text-blue-800'>
                    <Facebook />
                </Link>
                <Link href="" className='text-gray-500 hover:text-blue-800'>
                    <Github />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer