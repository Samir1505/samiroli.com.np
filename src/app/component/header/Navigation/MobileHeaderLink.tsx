import { useState } from 'react'
import Link from 'next/link'
import { HeaderItem } from '@/types/menu'
import { usePathname } from 'next/navigation'

const MobileHeaderLink: React.FC<{
  item: HeaderItem
  onLinkClick?: () => void
}> = ({ item, onLinkClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const path = usePathname()

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen)
  }

  return (
    <Link href={item.href} className="relative block w-full">
      <button
        onClick={(e) => {
          if (item.submenu) {
            e.preventDefault()
            handleToggle()
          } else {
            onLinkClick?.() // ✅ close sidebar
          }
        }}
        className={`
          flex items-center justify-between w-full
          py-3 px-4 text-left
          text-gray-900 dark:text-gray-300
          transition-colors duration-200
          focus:outline-none
          hover:text-primary
        `}
      >
        <span className="text-base">{item.label}</span>

        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
            className={`transition-transform duration-300 ${
              submenuOpen ? 'rotate-180 text-primary' : ''
            }`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </button>

      {submenuOpen && item.submenu && (
        <div className="ml-6">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={onLinkClick} // ✅ submenu click closes sidebar
              className="
                block py-2
                text-sm text-gray-600 dark:text-gray-400
                transition-colors duration-200
                hover:text-primary
              "
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </Link>
  )
}

export default MobileHeaderLink
