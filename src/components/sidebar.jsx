import Link from "next/link";
import NavLinks from "./sidenavlink";

export default function Sidebar() {
  return (
    <section className="flex h-full flex-col px-3 py-4 md:px-2">
    <div className=" min-w-40 flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow  md:block"></div>
        <Link className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" href={'/'}>Log oute</Link>
    </div>
    </section>
  )
}
