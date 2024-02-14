'use client'
import { signOut, useSession } from "next-auth/react";

export default function Logoutbutton() {
    const session = useSession();
    console.log(session)
  return (
    <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-[#7d3daa] hover:text-white md:flex-none md:justify-start md:p-2 md:px-3"
    onClick={() => signOut({
        callbackUrl: '/'
    })}
    >
      Log oute
    </button>
  )
}
