'use client'
import { getImgPath } from '@/app/utils/image';
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
const Hero = () => {
  const typing1Ref = useRef(null);

  useEffect(() => {
    const typed1 = new Typed(typing1Ref.current, {
      strings: ["Front-End Developer", "Graphic Designer", "Programmer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });



    // Cleanup on unmount
    return () => {
      typed1.destroy();
    };
  }, []);


  return (
    <section className='relative md:pt-44 pt-28  bg-white  dark:bg-darklight bg-cover text-white'>
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
        <div
         className="md:col-span-6 col-span-12 order-2 px-0 lg:order-1 space-y-4 flex flex-col items-start justify-center 
           p-4 lg:pl-0"

          // data-aos='fade-right'
          // data-aos-delay='200'
          // data-aos-duration='1000'
          >
          <div className='flex flex-col gap-2 md:gap-3'>
            {/* Small Intro */}
            <span className='text-sm md:text-base font-medium text-gray-500 dark:text-gray-400'>
              Hello, It's Me
            </span>

            {/* Name */}
            <h1 className='text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight md:leading-[1.05]'>
              Samir Chhetri
            </h1>

            {/* Typing Role */}
            <div
              className='text-lg md:text-2xl font-semibold text-gray-800 dark:text-gray-200'
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              I'm a{' '}
              <span
                className='text-success dark:text-blue-700 typing-1 capitalize'
                ref={typing1Ref}
              ></span>

            </div>

          <style jsx global>{`
  /* Light mode cursor */
  .typed-cursor {
    color: #28a745; /* Tailwind 'text-success' green */
  }

  /* Dark mode cursor */
  html.dark .typed-cursor {
    color: blue /* Tailwind blue-400 */
  }
`}</style>



            {/* Location */}
            <div
              className='text-base md:text-lg font-medium text-gray-600 dark:text-gray-400'
              style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}
            >
              From <span className='font-semibold text-gray-800 dark:text-gray-200'>Salyan</span>
            </div>

            {/* Description */}
            <p className='text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mt-1 md:mt-2 max-w-2xl leading-relaxed'>
              I am a passionate Frontend and MEAN Stack developer from Salyan, dedicated to building responsive and user-friendly web applications that provide seamless experiences.
            </p>
          </div>


          <a
            href='#'
            className='py-3 bg-success text-white rounded-md hover:bg-success transition duration-300 px-8 dark:hover:bg-primary dark:bg-primary'>
            Hire Me
          </a>
          {/* Social Media Icons */}
          <div className='flex items-center gap-3'>
            <Link href='#' className='text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition'>
              <FaFacebookF size={16} />
            </Link>
            <Link href='#' className='text-white bg-sky-400 p-2 rounded-full hover:bg-sky-500 transition'>
              <FaTwitter size={16} />
            </Link>
            <Link href='#' className='text-white bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition'>
              <FaLinkedinIn size={16} />
            </Link>
            <Link href='#' className='text-white bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition'>
              <FaInstagram size={16} />
            </Link>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12 order-1 lg:order-2 relative before:absolute before:content-[''] before:bg-[url('/images/hero/line-leyar.svg')] before:bg-no-repeat before:left-1/2 before:top-0 before:h-24 before:w-52 before:-z-10 before:translate-x-70% before:-translate-y-40% lg:before:inline-block before:hidden after:absolute after:content-[''] after:bg-[url('/images/hero/round-leyar.svg')] after:bg-no-repeat xl:after:inline-block after:hidden after:left-0 after:bottom-0 after:h-6.25 after:w-6.25 after:-z-10 after:-translate-x-1/2 after:translate-y-1/2">
          <Image className='md:block hidden'
            src={getImgPath('/images/home.jpg')}
            alt='hero-image'
            width={350}
            height={150}
            quality={100}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
    
  )
}

export default Hero
