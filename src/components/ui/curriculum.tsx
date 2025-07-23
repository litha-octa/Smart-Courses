'use client';
import { useRouter } from "next/navigation";
type Module = {
  title: string;
  videos: number;
  duration: string;
};

const modules: Module[] = [
  { title: "Selamat Datang", videos: 1, duration: "4 m" },
  { title: "Pengenalan Virtual Machine", videos: 5, duration: "17 m" },
  { title: "Virtual Machine Pada Virtualbox", videos: 5, duration: "40 m" },
  { title: "Networking Pada Virtualbox", videos: 9, duration: "57 m" },
  { title: "Virtual Machine Pada VMWare", videos: 5, duration: "18 m" },
  { title: "Networking Pada VMWare", videos: 5, duration: "30 m" },
  { title: "Linux Installation", videos: 4, duration: "52 m" },
  { title: "Login to Linux", videos: 2, duration: "6 m" },
  { title: "Accessing Command Line", videos: 2, duration: "14 m" },
  { title: "Managing Files", videos: 10, duration: "1 j 24 m" },
  { title: "Command Line Tips & Tricks", videos: 4, duration: "22 m" },
  { title: "Create, View, & Edit Files", videos: 6, duration: "41 m" },
  { title: "Manajemen User & Group", videos: 7, duration: "37 m" },
  { title: "Controlling Access to Files", videos: 9, duration: "40 m" },
  { title: "Lab Setup", videos: 8, duration: "34 m" },
  { title: "Basic Configuration", videos: 6, duration: "42 m" },
];
const Curriculum = () => {
  return (
    <div className="text-[13px] mx-auto py-10 px-4">
      {modules.map((module, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-3 border-b border-gray-200"
        >
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-slate-800 font-medium">{module.title}</span>
          </div>
          <div className="text-sm text-slate-600 whitespace-nowrap">
            {module.videos} Video · {module.duration}
          </div>
        </div>
      ))}
    </div>
  );
};


export default Curriculum;