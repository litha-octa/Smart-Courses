"use client";
import React, { useState } from "react";
import { detailCourse, menuDetail } from "@/app/data/listCourse";
import BgDetail from "@/assets/bg-detail.svg";
import {
  Tally4,
  ShieldCheck,
  GraduationCap,
  Infinity,
  Youtube,
  TvMinimalPlay,
  Star,
  Archive,
} from "lucide-react";

const DetailCourse = () => {
  const [play, setPlay] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div className="relative min-h-screen ">
      <div className="h-[500px] relative w-full bg-gradient-to-r from-[#36B4F4] to-[#2468BB]">
        <div
          style={{
            backgroundImage: `url(${BgDetail.src})`,
          }}
          className="absolute bg-cover bg-center top-0 left-0 bottom-0 right-0 "
        ></div>
        <div className="z-50 flex justify-center items-center py-10 flex-col">
          <p className="text-[40px] font-bold text-white">
            {detailCourse.title}
          </p>
          <p className="text-[16px] text-white">{detailCourse.subtitle}</p>
          <p className="text-[16px] text-white">Oleh {detailCourse.author}</p>
        </div>

        <div className="flex justify-center items-center absolute top-44 h-[500px] left-0 right-0 gap-10">
          <div>
            <div className="w-[700px] h-[400px] rounded-[15px] overflow-hidden">
              <div className="relative w-full">
                {play ? (
                  <iframe
                    className="w-full aspect-video"
                    src={detailCourse.videolink}
                    title="YouTube Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="w-full aspect-video bg-cover bg-center cursor-pointer relative"
                    style={{
                      backgroundImage: `url(${detailCourse.thumbnailUrl})`,
                    }}
                    onClick={() => setPlay(true)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="text-white text-5xl bg-black/50 rounded-full px-4 py-2">
                        ▶
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="h-[70px] bg-white mt-10 rounded-[5px] flex justify-start px-2 items-center w-[700px]">
              {menuDetail.map((item: string, i: number) => {
                return (
                  <button
                  onClick={() => setActive(i)}
                   key={i} className={`w-[120px] hover:opacity-85 cursor-pointer h-[50px] ${i == active ? "bg-gradient-to-tr from-[#026690] to-[#0C9EF0] text-white ":" bg-transparent text-[#026690]"
                  } rounded-[5px]  font-bold flex justify-center items-center`}>
                    <p>{item}</p>
                  </button>
                );
              })}

             
            </div>
          </div>

          <div className="w-[400px] h-[500px] rounded-[10px] bg-white p-5">
            <div className="grid grid-cols-3 gap-3 mt-10 w-full">
              <div className="col-span-1 flex flex-col text-[#026690] h-[60px] items-center justify-center">
                <Tally4 color="#026690" />
                <p className="text-[12px] uppercase">Semua Tingkat</p>
              </div>
              <div className="col-span-1 flex flex-col text-[#026690] h-[60px] items-center justify-center">
                <ShieldCheck color="#026690" />
                <p className="text-[12px] uppercase">Sertifikat</p>
              </div>
              <div className="col-span-1 flex flex-col text-[#026690] h-[60px] items-center justify-center">
                <GraduationCap color="#026690" />
                <p className="text-[12px] uppercase">
                  {detailCourse.views} Siswa
                </p>
              </div>
              <div className="col-span-1 flex flex-col text-[#026690] h-[60px] items-center justify-center">
                <Infinity color="#026690" />
                <p className="text-[12px] uppercase">Ulimited</p>
                <p className="text-[12px] uppercase">Akses</p>
              </div>
              <div className="col-span-1 flex flex-col text-[#026690] h-[60px] items-center justify-center">
                <Youtube color="#026690" />
                <p className="text-[12px] uppercase">157 Video</p>
              </div>
              <div className="col-span-1 flex flex-col text-[#026690] h-[60px] items-center justify-center">
                <TvMinimalPlay color="#026690" />
                <p className="text-[12px] uppercase">15 Jam 43 Menit</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-10 my-10 text-[13px]">
              <div className="">
                <p className="text-[16px] font-bold">Rating</p>
                <div className="flex justify-start items-center gap-2">
                  <Star className="text-yellow-500" size={20} />{" "}
                  <span>{detailCourse.rating}</span>
                </div>
              </div>
              <div className="">
                <p className="text-[16px] font-bold">Kategory</p>
                <div className="flex justify-start items-center gap-2">
                  <Archive color="#026690" size={20} />{" "}
                  <span>{detailCourse.category}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setPlay(true)}
              className="w-full bg-gradient-to-tr hover:opacity-80 cursor-pointer  from-[#026690] to-[#0C9EF0] py-2 h-[40px] mt-[100px] text-white font-bold justify-center flex items-center rounded-[5px]"
            >
              <p>Tonton Kelas Sekarang</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCourse;
