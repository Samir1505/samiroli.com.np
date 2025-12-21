'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { getImgPath } from '@/app/utils/image'
import Typed from "typed.js";
// Define the interface for ProgressItem
interface ProgressItem {
  title: string
  Progress: number
}

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  const [progressValues, setProgressValues] = useState<ProgressItem[]>([]) // Initialize with ProgressItem[]


  const typing1Ref = useRef(null);

  useEffect(() => {


    const typed1 = new Typed(typing1Ref.current, {
      strings: ["Front-End Developer", "Graphic Designer", "Programmer", "Student"],
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
    <>
      <section
        className={`scroll-mt-25 ${isColorMode
          ? 'dark:bg-darklight bg-white'
          : 'dark:bg-darkmode bg-white'
          }`}
        id='about'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid md:grid-cols-12 items-center lg:gap-17 gap-7'>
            <div className='md:col-span-6'>
              <Image
                src={getImgPath('/images/about2.jpg')}
                alt='logo'
                width={375}
                height={0}
                quality={100}
                style={{ width: '100%', height: 'auto' }}
                className='md:block rounded'
              />
            </div>
            
            <div
              className='md:col-span-6'
              // data-aos='fade-left'
              // data-aos-delay='200'
              data-aos-duration='1000'>
              <div className='flex gap-2 items-center'>
                <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                  About Us
                </span>
              </div>
              <h2
                className="
    pt-6 sm:pt-7 md:pt-9
    pb-6 sm:pb-7 md:pb-8
    text-midnight_text
    font-bold
    dark:text-white
    text-lg
    sm:text-xl
    md:text-2xl
  "
              >
                I'm Samir Oli and I'm a{' '}
                <span
                  className=" text-success dark:text-blue-700
      typing-1
      text-capitalize
      fw-semibold
      text-lg
      sm:text-xl
      md:text-2xl
    "
                  ref={typing1Ref}
                ></span>
              </h2>

              <p className='text-gray dark:text-white/70 text-base font-semibold'>
                I am a Frontend Developer with a passion for creating interactive and responsive web applications. I have experience working with HTML, CSS, Bootstrap, Tailwind CSS, Sass/SCSS, JavaScript, React Js, Next Js, Git, and GitHub. I am a quick learner and always eager to expand my knowledge and skill set. I am a team player and excited to collaborate on creating amazing applications.


              </p>


              <div className="block mx-auto pt-12">
                <a
                  href=""
                  className="dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700
      inline-block
      px-7 py-3
      text-sm sm:text-base
      font-semibold
      rounded
      bg-success
      text-black
      transition-all duration-300
      hover:bg-success
      hover:shadow-lg
      active:scale-95
      focus:outline-none
      focus:ring-2
      focus:ring-success
      focus:ring-offset-2
      dark:focus:ring-offset-dark
    "
                >
                  Download CV
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Progresswork
