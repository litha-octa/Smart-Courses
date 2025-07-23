'use client';

import { BellIcon } from "lucide-react";
import { UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    const router = useRouter();
    const [username, setUsername] = useState<string>("User");
    useEffect(() => {
      const email = localStorage.getItem("email");
      setUsername(email?.split('@')[0] || "User")
      if (!email) {
        router.push("/login");
      }
    }, [router]);
  return (
    <nav className="flex flex-row w-full bg-primary sticky top-0 left-0 right-0 justify-between text-white md:p-4 p-2">
      <div className="md:text-3xl text-lg font-bold hover:cursor-pointer" onClick={() => router.push("/course/beranda")}>Smart-Courses</div>
      <div className="flex flex-row items-center space-x-4">
        <BellIcon size={32} className="hover:cursor-pointer"/>
        <UserCircle size={32} onClick={() => router.push("/course/profile")} className="hover:cursor-pointer"/>
        <div className="font-bold hidden md:flex"> Hello, {username}</div>
          
    </div>
    </nav>
  );
}

export default Navbar;