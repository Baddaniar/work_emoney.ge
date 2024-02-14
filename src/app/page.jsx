import LoginForm from "@/components/loginform";
import SideBar from "@/components/sidebar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
    </div>
  );
}
