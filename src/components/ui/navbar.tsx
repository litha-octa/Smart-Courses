'use client';

import { BellIcon } from "lucide-react";
import { UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
  return (
    <nav className=" flex flex-row w-full bg-[#2fd1c8] justify-between text-white md:p-4 p-2">
      <div className="md:text-3xl text-lg font-bold">Smart-Courses</div>
      <div className="flex flex-row items-center space-x-4">
        <BellIcon size={32}/>
        <UserCircle size={32} onClick={() => router.push("/profile")}/>
    </div>
    </nav>
  );
}

export default Navbar;