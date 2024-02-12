import AllUsersTable from "@/components/allusers/alluserstable";
import SearchUserInput from "@/components/allusers/searchuser";

export default function Alluser() {
  return (
    <div className="w-full">
        <SearchUserInput />
        <AllUsersTable />
    </div>
  )
}
