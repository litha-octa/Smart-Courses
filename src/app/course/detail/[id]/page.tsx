"use client";
import React, { useState } from "react";
import { detailCourse, menuDetail } from "@/app/data/listCourse";
import BgDetail from "@/assets/bg-detail.svg";
import { Volume2 } from "lucide-react";
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
import { Description, Curriculum, Mentor, Review } from "@/components/ui";
const DetailCourse = () => {
  const [play, setPlay] = useState(false);
  const [active, setActive] = useState(0);
  return (
    <div className="relative ">
      <div className="min-h-[500px] relative w-full bg-gradient-to-b from-teal-500 to-teal-300">
        <div
          style={{
            backgroundImage: `url(${BgDetail.src})`,
          }}
          className="absolute bg-cover bg-center top-0 left-0 bottom-0 right-0 "
        ></div>
        <div className="z-50 flex justify-center items-center py-10 flex-col">
          <p className="lg:text-[40px] md:text-[40px] text-[20px] font-bold text-white">
            {detailCourse.title}
          </p>
          <p className="text-[16px] text-center text-white">{detailCourse.subtitle}</p>
          <p className="text-[16px] text-white">Oleh {detailCourse.author}</p>
        </div>

        <div className="flex lg:flex-row md:flex-col flex-col justify-center  lg:items-start md:items-center items-center absolute top-44 min-h-[500px] left-0 right-0 lg:gap-10">
          <div className="flex justify-center items-center flex-col">
            <div className="lg:w-[700px] md:w-[700px] w-[80%] lg:h-[400px] md:h-[400px] h-[200px] rounded-[15px] overflow-hidden">
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
            <div className="h-[70px] bg-white shadow mt-10 rounded-[5px] flex justify-start px-2 items-center lg:w-[700px] md:w-[700px] w-[80%]">
              {menuDetail.map((item: string, i: number) => {
                return (
                  <button
                    onClick={() => setActive(i)}
                    key={i}
                    className={`w-[120px] hover:opacity-85 cursor-pointer h-[50px] ${
                      i == active
                        ? "bg-gradient-to-tr from-teal-500 to-teal-200 text-white "
                        : " bg-transparent text-teal-500"
                    } rounded-[5px]  font-bold flex justify-center items-center`}
                  >
                    <p>{item}</p>
                  </button>
                );
              })}
            </div>
            <div className="lg:w-[700px] md:w-[700px] w-[80%] my-5 bg-white shadow rounded-[10px]">
              {active == 0 ? (
                <Description />
              ) : active == 1 ? (
                <Curriculum />
              ) : active == 2 ? (
                <Mentor image={detailCourse.authorImage} />
              ) : (
                <Review />
              )}
            </div>
          </div>

          {/* Ini Kurikulum */}
          <div className="lg:w-[400px] md:w-[700px] w-[90%] h-[500px]  shadow rounded-[10px] bg-white p-5">
            <div className="grid grid-cols-3 gap-3 mt-10 w-full">
              <div className="col-span-1 flex flex-col text-teal-500 h-[60px] items-center justify-center">
                <Tally4 className="text-teal-500" />
                <p className="text-[12px] uppercase">Semua Tingkat</p>
              </div>
              <div className="col-span-1 flex flex-col text-teal-500 h-[60px] items-center justify-center">
                <ShieldCheck className="text-teal-500" />
                <p className="text-[12px] uppercase">Sertifikat</p>
              </div>
              <div className="col-span-1 flex flex-col text-teal-500 h-[60px] items-center justify-center">
                <GraduationCap className="text-teal-500" />
                <p className="text-[12px] uppercase">
                  {detailCourse.views} Siswa
                </p>
              </div>
              <div className="col-span-1 flex flex-col text-teal-500 h-[60px] items-center justify-center">
                <Infinity className="text-teal-500" />
                <p className="text-[12px] uppercase">Ulimited</p>
                <p className="text-[12px] uppercase">Akses</p>
              </div>
              <div className="col-span-1 flex flex-col text-teal-500 h-[60px] items-center justify-center">
                <Youtube className="text-teal-500" />
                <p className="text-[12px] uppercase">157 Video</p>
              </div>
              <div className="col-span-1 flex flex-col text-teal-500 h-[60px] items-center justify-center">
                <TvMinimalPlay className="text-teal-500" />
                <p className="text-[12px] uppercase">15 Jam 43 Menit</p>
              </div>
            </div>

            <div className="grid grid-cols-2 text-teal-500  justify-center px-5 items-center gap-10 my-10 text-[13px]">
              <div className="col-span-1">
                <p className="text-[16px] font-bold">Rating</p>
                <div className="flex justify-start items-center gap-2">
                  <Star className="text-yellow-500" size={20} />{" "}
                  <span>{detailCourse.rating}</span>
                </div>
              </div>
              <div className="col-span-1">
                <p className="text-[16px] font-bold">Kategory</p>
                <div className="flex justify-start items-center gap-2">
                  <Archive className="text-teal-500" size={20} />{" "}
                  <span>{detailCourse.category}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setPlay(true)}
              className="w-full bg-gradient-to-tr hover:opacity-80 cursor-pointer  from-teal-500 to-teal-200 py-2 h-[40px] mt-[100px] text-white font-bold justify-center flex items-center rounded-[5px]"
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
