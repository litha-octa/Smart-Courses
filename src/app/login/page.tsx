'use client';
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push("/beranda");
  };

  return (
    <div className="flex justify-center bg-primary items-center">
      <h1>Login Page</h1>
      <div>ini halaman login ya</div>
      <button onClick={handleHome}>pindah ke halaman home</button>

    </div>
  );
}

export default Login;