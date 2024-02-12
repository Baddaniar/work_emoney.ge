import Link from "next/link"

export default function DetailButton({id}) {
  return (
    <>
    <Link className="bg-sky-500 hover:bg-sky-700 px-3 py-1 text-sm leading-5 rounded-full font-semibold text-white" href={`/allusers/${id}`}>Details</Link>
    </>

  )
}
