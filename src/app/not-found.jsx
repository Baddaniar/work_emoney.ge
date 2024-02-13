import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col min-h-10 rounded-lg justify-center align-middle bg-gray-50 px-6 pb-4 pt-8">
      <h2 className={` mb-3 text-2xl`}>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className=" text-center mt-5 bg-[#460A72] hover:bg-[#7d3daa] px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white" href="/allusers">Return Home</Link>
      </div>
    </div>
  )
}