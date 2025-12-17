import React, { FC } from 'react'
import Link from 'next/link'


const Footer: FC = () => {
  return (
    <footer className='bg-darkmode relative z-1 border-t border-dark_border px-6'>
 
      <div className='text-center gap-4 md:gap-0 flex-wrap p-7 border-t border-solid border-dark_border'>
        <div>
          <ul className='flex justify-center mb-4 items-center sm:gap-7 gap-3'>
            <li className='text-base text-white/50'>
              <Link href='/#about' className='hover:text-primary'>
                About
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/#services' className='hover:text-primary'>
                Services
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/portfolio' className='hover:text-primary'>
                Portfolio
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/blog' className='hover:text-primary'>
                Blog
              </Link>
            </li>
            <li className='text-base text-white/50'>
              <Link href='/contact' className='hover:text-primary'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-base text-white/50'>
           Created By{' '}
            <Link
              href='https://getnextjstemplates.com/'
              target='_blank'
              className='hover:text-primary'>
             SAMIRCHHETRI 
            </Link>{' '}
           | © 2025 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer> 
  )
}

export default Footer
