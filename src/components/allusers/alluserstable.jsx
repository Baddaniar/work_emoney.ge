import { getAllUsers } from "@/app/api/allusers"
import DetailButton from "./detailbutton"
import { getServerSession } from "next-auth"
import { authConfig } from "@/app/api/auth/[...nextauth]/route"
import DeleteButton from "./deletebutton"

export default async function AllUsersTable() {
  const session = await getServerSession(authConfig)
  const placeholder_users = await getAllUsers()
  const alluser = [
    {id: '1',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '2',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '3',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '4',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '5',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '6',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '7',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '8',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '9',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '10',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '11',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '12',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '13',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '14',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '15',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '16',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '17',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '18',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '19',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '20',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
  ]

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-100 p-2 md:pt-0">
          <table className=" min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 text-purple-950 py-5 font-medium sm:pl-6">
                  Id
                </th>
                <th scope="col" className="px-3 text-purple-950 py-5 font-medium">
                  Name/Username
                </th>
                <th scope="col" className="px-3 text-purple-950 py-5 font-medium">
                  Id number
                </th>
                <th scope="col" className="px-3 text-purple-950 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 text-purple-950 py-5 font-medium">
                  Phone number
                </th>
                <th scope="col" className="px-3 text-purple-950 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="px-3 text-purple-950 py-5 font-medium">
                  Legal entity
                </th>
                <th scope="col" className="relative py-3 pl-3 pr-1">
                </th>
              </tr>
            </thead>
            <tbody className="bg-white overflow-y-scroll">
              {alluser?.map((user) => (
                <tr
                  key={user.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  {user.id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.name_username}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.id_number}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.phone_number}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.status}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.legal_entity}
                  </td>
                  <td className="whitespace-nowrap px-1 py-3">
                    <DetailButton id={user.id}/>
                    {session?.user.name === 'admin' && (
                      <DeleteButton id={user.id} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
