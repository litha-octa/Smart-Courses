/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import Head from "next/head";
import Image from "next/image";
import Image_Icon from "../../../assets/gambar_orang.png";
import Teks_Beranda from "../../../assets/teks_jadi_expert.png";
import { Youtube } from "lucide-react";
import { UsersRound } from "lucide-react";
import { Star } from "lucide-react";
import { Search } from "lucide-react";
import { listCourse } from "../../data/listCourse";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Beranda() {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const [filteredCourses, setFilteredCourses] = useState(listCourse); 
  const handleDetail = (data: any) => {
    router.push(`detail/${data.id}`);
    localStorage.setItem("detail", JSON.stringify(data));
  };
  function searchByTitle(keyword: string) {
  const term = keyword.toLowerCase();
  setFilteredCourses(listCourse.filter(course =>
    course.title.toLowerCase().includes(term)
  ));
}

  return (
    <>
      <Head>
        <title>Universitas Siber Asia</title>
      </Head>

      <main className="bg-white text-gray-800 font-sans">
        {/* HERO SECTION */}
        <section className="mt-6 mx-4 md:mx-5 rounded-xl overflow-hidden bg-white flex flex-col md:flex-row items-center justify-between lg:px-32  py-10 text-white relative">
          <div className="w-full bg-gradient-to-b from-teal-500 to-teal-100 rounded-xl flex lg:flex-row md:flex-row flex-col lg:justify-around md:justify-around justify-center items-center px-10 z-10">
            <Image
              src={Image_Icon}
              alt="Orang"
              width={500}
              height={500}
              className="object-contain lg:block md:block hidden"
            />
            <Image
              src={Image_Icon}
              alt="Orang"
              width={300}
              height={300}
              className="object-contain lg:hidden md:hidden block"
            />

            <Image
              src={Teks_Beranda}
              alt="Teks Hero"
              width={300}
              height={250}
              className="object-contain lg:block md:block hidden"
            />
            <Image
              src={Teks_Beranda}
              alt="Orang"
              width={200}
              height={200}
              className="object-contain lg:hidden md:hidden block"
            />
          </div>
        </section>

        <section className="flex flex-wrap justify-center gap-10 py-10 bg-white">
          {/* Peserta Kursus */}
          <div className="flex items-center gap-4">
            <div className="bg-teal-100 p-4 rounded-xl">
              <UsersRound className="text-[40px] text-teal-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-teal-600">79275+</p>
              <p className="text-gray-700">Peserta kursus</p>
            </div>
          </div>
          {/* Review Bintang 5 */}
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 p-4 rounded-xl">
              <Star className="text-[40px] text-orange-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-500">32235+</p>
              <p className="text-gray-700">Review bintang 5</p>
            </div>
          </div>
          {/* Pilihan Kursus */}
          <div className="flex items-center gap-4">
            <div className="bg-rose-100 p-4 rounded-xl">
              <Youtube className="text-[40px] text-rose-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-rose-500">9+</p>
              <p className="text-gray-700">Pilihan kursus</p>
            </div>
          </div>
        </section>

        {/* Section Hijau */}
        <section className="bg-gradient-to-t from-teal-500 to-teal-300 py-16 text-center text-white">
          <h2 className="lg:text-4xl md:text-4xl text-2xl font-extrabold mb-4">
            Mau Belajar apa nih ?
          </h2>
          <p className="text-lg mb-16">
            Ayo tingkatkan skill mu bersama SMART-COURSES!
          </p>
        </section>

        {/* Search Box Floating */}
        <div className="relative z-10 -mt-12 flex justify-center px-4">
          <div className="flex items-center bg-white rounded-full shadow-md px-6 lg:py-4 md:py-4 py-2 w-full max-w-3xl ">
            <input
              type="text"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
                searchByTitle(e.target.value);
              }}
              placeholder="Cari kelas yang kamu sukai"
              className="flex-grow focus:outline-none text-lg text-black placeholder-gray-400"
            />
            <Search className="text-primary" size={24} />
          </div>
        </div>

        {/* Kelas Populer */}
        <section className="bg-gray-100 py-16 px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">Kelas Populer</h3>
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
            {filteredCourses.map((kelas, index) => (
              <div
                key={index}
                onClick={() => handleDetail(kelas)}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all"
              >
                <div className="mb-4 rounded-xl overflow-hidden">
                  <img
                    src={kelas.image}
                    alt={kelas.title}
                    width={400}
                    height={200}
                    className="w-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-primary text-lg mb-1">
                  {kelas.title}
                </h4>
                <p className="text-gray-500 text-sm mb-3">{kelas.subtitle}</p>
                <p className="font-bold text-black text-lg">{kelas.author}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
