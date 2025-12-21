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
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
          }`}
        id='about'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid md:grid-cols-12 items-center gap-7'>
            <div className='md:col-span-6'>
              <Image
                src={getImgPath('/images/about2.jpg')}
                alt='logo'
                width={375}
                height={0}
                quality={100}
                style={{ width: '100%', height: 'auto' }}
                className='md:block hidden'
              />
            </div>
            <div
              className='md:col-span-6'
              data-aos='fade-left'
              data-aos-delay='200'
              data-aos-duration='1000'>
              <div className='flex gap-2 items-center'>
                <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                  About Us
                </span>
              </div>
              <h2 className='pt-9 pb-8 text-midnight_text font-bold dark:text-white text-4xl'>

                I'm Samir Chhetri and <br /> I'm a{' '}
                <span
                  className="typing-1 text-capitalize fw-semibold"
                  style={{ color: '#0d6efd' }}
                  ref={typing1Ref}
                ></span>
              </h2>
              <p className='text-gray dark:text-white/70 text-base font-semibold'>
                I am a Frontend Developer with a passion for creating interactive and responsive web applications. I have experience working with HTML, CSS, Bootstrap, Tailwind CSS, Sass/SCSS, JavaScript, React Js, Next Js, Git, and GitHub. I am a quick learner and always eager to expand my knowledge and skill set. I am a team player and excited to collaborate on creating amazing applications.


              </p>


              <div className='block mx-auto pt-12'>
                <a
                  href="#"
                  download
                  className="
    inline-flex items-center gap-2
    bg-primary text-white
    dark:bg-primary dark:text-white
    font-semibold uppercase text-sm
    px-6 py-3 rounded-full
    shadow-md
    hover:scale-105 hover:shadow-lg
    transition-all duration-300
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
