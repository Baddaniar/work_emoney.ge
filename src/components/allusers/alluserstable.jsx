import DetailButton from "./detailbutton"

export default function AllUsersTable() {
  const alluser = [
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
    {id: '333333',name_username: 'dan dan', id_number: '33123123', email: 'dasde@asdasd.com', phone_number: '+42234234', status: 'open', legal_entity: 'asdasd' },
  ]

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className=" min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  id
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  name/username
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  id number
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  phone number
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  status
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  legal entity
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">detail</span>
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