import Link from "next/link";
import NavLinks from "./sidenavlink";
import { signOut} from 'next-auth/react'
import Logoutbutton from "./logoutbutton";


export default function Sidebar() {
  return (
    <section className="flex h-full flex-col px-3 py-4 md:px-2">
    <div className=" min-w-40 flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow  md:block"></div>
        <Logoutbutton />
    </div>
    </section>
  )
}
