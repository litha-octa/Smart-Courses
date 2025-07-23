'use client';

import { BellIcon } from "lucide-react";
import { UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
  return (
    <nav className="flex flex-row w-full bg-gradient-to-br from-teal-500 to-teal-100 z-50 sticky top-0 left-0 right-0 justify-between text-white md:p-4 p-2">
      <div className="md:text-3xl text-lg font-bold">Smart-Courses</div>
      <div className="flex flex-row items-center space-x-4">
        <BellIcon size={32}/>
        <UserCircle size={32} onClick={() => router.push("course/profile")}/>
    </div>
    </nav>
  );
}

export default Navbar;