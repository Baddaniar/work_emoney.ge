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
              'flex h-[40px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
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
