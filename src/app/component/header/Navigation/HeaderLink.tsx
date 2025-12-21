"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '@/app/types/menu';
import { usePathname } from 'next/navigation';

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();

  const isActive =
    path === item.href ||
    (path.startsWith("/blog") && item.href === "/blog") ||
    (path.startsWith("/portfolio") && item.href === "/portfolio");

  return (
    <div
      className="relative"
      onMouseEnter={() => item.submenu && setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}
    >
      <Link
        href={item.href}
        className={`
  relative flex items-center gap-6 py-2 text-base font-normal
  text-black dark:text-white
  hover:text-success dark:hover:text-primary
  after:absolute after:left-0 after:-bottom-0.5
  after:h-[2px] after:w-0 after:bg-success dark:after:bg-primary
  after:transition-all after:duration-300
  hover:after:w-full
  ${isActive ? 'text-success dark:!text-primary after:w-full' : ''}
`}

      >
        {item.label}

        
      </Link>

      {submenuOpen && (
        <div
          className="absolute left-0 top-8 mt-0.5 w-60 rounded-lg bg-white py-2 shadow-lg dark:bg-darklight dark:shadow-dark-md"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2 text-[15px]
                ${
                  path === subItem.href
                    ? "bg-primary text-white"
                    : "text-black hover:bg-gray-200 hover:text-dark dark:text-white dark:hover:bg-midnight_text"
                }
              `}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
