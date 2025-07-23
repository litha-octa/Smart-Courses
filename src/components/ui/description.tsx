/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";

const Description = ({ data }: { data: any }) => {
  return (
    <div className="w-full  mx-auto px-4 text-[13px]  py-6 text-slate-800">
      <h2 className="text-[15px] font-bold mb-4">Tentang Kursus</h2>

      <p className="mb-4">{data.title}</p>

      <p className="mb-4">{data.desc}</p>

      <h3 className="text-lg font-semibold mt-6 mb-2">
        Apa aja sih yang akan kamu pelajari ?
      </h3>

      <ul className="list-none space-y-1 mb-6">
        {data?.topics?.map((topic: string, index: number) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-green-500">✔️</span>
            <span>{topic}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mb-2">Persiapan untuk kursusmu</h3>
      <p className="mb-6">
        Kamu hanya perlu lancar mengoperasikan komputer untuk mengikuti kursus
        ini
      </p>

      <h3 className="text-lg font-semibold mb-2">Untuk siapa kursus ini ?</h3>
      <ul className="list-none space-y-1">
        {data?.targetAudience?.map((item: string, index: number) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-green-500">✔️</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Description;
