import Head from "next/head";
import Image from "next/image";
// import { FaBell, FaShoppingCart, FaUser, FaUserFriends, FaStar, FaBook, FaSearch } from "lucide-react"

export default function Beranda() {
  const kelasPopuler = [
    {
      nama: "Front-End Web Development",
      durasi: "120 Video | 15 Jam",
      harga: "Rp. 249.000",
      gambar: "/kelas.jpg",
    },
    {
      nama: "UI/UX Design Fundamental",
      durasi: "80 Video | 10 Jam",
      harga: "Rp. 199.000",
      gambar: "/kelas.jpg",
    },
    {
      nama: "Data Science with Python",
      durasi: "100 Video | 12 Jam",
      harga: "Rp. 299.000",
      gambar: "/kelas.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Universitas Siber Asia</title>
      </Head>

      <main className="bg-white text-gray-800 font-sans">
        {/* NAVBAR */}
        <header className="flex justify-between items-center px-6 py-4 shadow-sm">
          <div className="flex items-center gap-2">
            <Image src="/logo_unsia.png" alt="Logo" width={40} height={40} />
            <h1 className="text-lg font-semibold">Universitas Siber Asia</h1>
          </div>
          <nav className="flex items-center gap-6 text-sm text-gray-700">
            <a href="#">Kelas</a>
            {/* <FaShoppingCart className="text-lg" /> */}
            {/* <FaBell className="text-lg" /> */}
            <div className="flex items-center gap-1">
              {/* <FaUser className="text-lg" /> */}
              <span>Users</span>
            </div>
          </nav>
        </header>

        {/* HERO SECTION */}
        <section className="mt-6 mx-4 md:mx-20 rounded-xl overflow-hidden bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 text-white relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/backgorund_hijau.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 z-10">
            <Image src="/gambar_orang.png" alt="Orang" width={590} height={590} className="object-contain" />
          </div>
          <div className="w-full md:w-1/2 flex justify-center z-10">
            <Image src="/teks_jadi_expert.png" alt="Teks Hero" width={600} height={350} className="object-contain" />
          </div>
        </section>

        {/* Stats Section */}
        <section className="flex flex-wrap justify-center gap-10 py-10 bg-white">
          <div className="text-center">
            {/* <FaUserFriends className="text-3xl mx-auto text-blue-600 mb-1" /> */}
            <p className="text-2xl font-bold text-blue-600">19800+</p>
            <p className="text-gray-600">Peserta Kursus</p>
          </div>
          <div className="text-center">
            {/* <FaStar className="text-3xl mx-auto text-blue-600 mb-1" /> */}
            <p className="text-2xl font-bold text-blue-600">15000</p>
            <p className="text-gray-600">Review Bintang 5</p>
          </div>
          <div className="text-center">
            {/* <FaBook className="text-3xl mx-auto text-blue-600 mb-1" /> */}
            <p className="text-2xl font-bold text-blue-600">11</p>
            <p className="text-gray-600">Pilihan Kursus</p>
          </div>
        </section>

        {/* Search Section */}
        <section className="bg-[#00C4CC] py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Mau Belajar apa nih ?</h2>
          <p className="text-white mb-6">Ayo tingkatkan skill mu bersama Universitas Siber Asia!</p>
          <div className="flex justify-center items-center mx-4 md:mx-0">
            <input
              type="text"
              placeholder="Cari kelas yang kamu sukai"
              className="px-6 py-3 w-full max-w-lg rounded-l-full focus:outline-none"
            />
            <button className="bg-white px-4 py-3 rounded-r-full border-l border-gray-300">
              {/* <FaSearch className="text-[#00C4CC]" /> */}
            </button>
          </div>
        </section>

        {/* Kelas Populer */}
        <section className="bg-gray-100 py-16 px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">Kelas Populer</h3>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {kelasPopuler.map((kelas, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all"
              >
                <div className="mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={kelas.gambar}
                    alt={kelas.nama}
                    width={400}
                    height={200}
                    className="w-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg mb-1">{kelas.nama}</h4>
                <p className="text-gray-500 text-sm mb-3">{kelas.durasi}</p>
                <p className="font-bold text-black text-lg">{kelas.harga}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
