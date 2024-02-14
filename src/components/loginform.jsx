"use client"
import { signIn} from 'next-auth/react'
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    });

    if(res && ! res.error){
      router.push('/allusers')
    }else{
      alert('incorrect emil or password')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex-1 rounded-lg w-60 bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={` mb-3 text-2xl`}>Please log in.</h1>
          <div className="w-full mb-5">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-1 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-1 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
              </div>
            </div>
          </div>
          <div className="flex mb-5 justify-center">
          <button
            className=" bg-[#460A72] hover:bg-[#7d3daa] px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
            type='submit'
          >
            Log in
          </button>
          </div>

        </div>
      </form>
    </div>
  );
}
