'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';



export default function NavLinks() {
    const links = [
        { name: 'Users', href: '/allusers'},
        { name: 'AML', href: '/aml'},
        { name: 'Kyc', href: '/aml'},
        { name: 'Incaso', href: '/aml'},
        { name: 'Card', href: '/aml'},
        { name: 'Finance', href: '/aml'},
      ];
  const pathname = usePathname();
  return (
    <>
      {
        links.map((link) => {
            return(
            <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[40px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-[#7d3daa] hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-[#7e4ca1] text-white': pathname === link.href,
              },
            )}
          >
            <p>{link.name}</p>
          </Link>)
        })
      }
    </>
  );
}
