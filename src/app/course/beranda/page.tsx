'use client';
import { useRouter } from "next/navigation";

const Beranda = () => {
  const router = useRouter();
    const handleLogin = () => {
        router.push("/profile");
    };

  return (
    <>
    <h1>Home Page</h1>
    <div>ini halaman home ya</div>
    <button onClick={handleLogin}>Pindah ke halaman profileeee</button>

    </>
  );
}
export default Beranda;