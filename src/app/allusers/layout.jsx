import SideBar from "@/components/sidebar";

export const metadata = {
  title: "Users",
  description: "All users table",
};

export default function Layout({ children }) {
  return (
    <div className="flex flex-row overflow-hidden h-screen ">
        <div className=" flex-none">
        <SideBar />
        </div>
      <main className="grow overflow-y-auto p-12">{children}</main>
    </div>
  );
}
