'use client'
import { useRouter } from "next/navigation";
import Login from "./login/page";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setIsAuthenticated(true);
      router.push("/course/beranda"); // Redirect to main page if authenticated
    } else {
      setIsAuthenticated(false);
    }
  }, [router]);

  if (isAuthenticated === null) return null;
  return (
    <>
    {!isAuthenticated && <Login />}
    </>
  );
}
