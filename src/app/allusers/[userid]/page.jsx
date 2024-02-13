import { getUserDetails } from "@/api/user"


export default async function UserDetail({params}) {
  const data = await getUserDetails(params.userid)
  return (
    <div className="w-full">User page
        <h1>{params.userid}</h1>
    </div>
  )
}
