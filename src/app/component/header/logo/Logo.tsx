import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href="/">
      <div className="flex flex-col items-center cursor-pointer">
        {/* Main Logo */}
        <div className="flex overflow-hidden rounded-md border border-black dark:border-white">
          <span className="bg-green-500 dark:bg-blue-700 text-white font-bold px-3 py-1 text-sm">
            SAMIR
          </span>
          <span className="bg-white text-black font-bold px-3 py-1 text-sm">
            CHHETRI
          </span>
        </div>
        {/* Subtitle */}
        <span className="text-black text-xs mt-1 font-medium text-center dark:text-white">
          WEB DEVELOPER
        </span>
      </div>
    </Link>
  )
}

export default Logo
