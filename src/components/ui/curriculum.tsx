'use client';
import { useRouter } from "next/navigation";

const Curriculum = () => {

  const topics = [
    "Linux Installation",
    "Accessing Command Line",
    "Managing Files",
    "Command Line Tips & Tricks",
    "Create, View, & Edit Files",
    "Manajemen User & Group",
    "Controlling Access to Files",
    "Linux Networking",
    "Linux Router & Firewall",
    "Remote Access",
    "DHCP Server",
    "NFS Server",
    "Samba Server",
    "Recursive DNS Server",
    "Forwarding DNS Server",
    "Master & Slave DNS Server",
    "Web Server Nginx",
    "Web Server Apache",
  ];

  const targetAudience = [
    "Siswa SMK TKJ",
    "Mahasiswa IT",
    "Fresh Graduate",
    "Network Engineer",
    "System Administrator",
    "dan siapapun yang ingin menjadi System Administrator",
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 text-slate-800">
      <h2 className="text-xl font-semibold mb-4">Tentang Kursus</h2>

      <p className="mb-4">
        Debian dan Ubuntu merupakan salah distro linux open source yang sangat
        banyak digunakan untuk kebutuhan server. Sehingga belajar kedua distro ini
        merupakan kunci utama jika kamu ingin bekerja menjadi seorang System
        Administration.
      </p>

      <p className="mb-4">
       Kurururu
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">
        Apa aja sih yang akan kamu pelajari ?
      </h3>

      <ul className="list-none space-y-1 mb-6">
        {topics.map((topic, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-green-500">✔️</span>
            <span>{topic}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mb-2">Persiapan untuk kursusmu</h3>
      <p className="mb-6">
        Kamu hanya perlu lancar mengoperasikan komputer untuk mengikuti kursus ini
      </p>

      <h3 className="text-lg font-semibold mb-2">Untuk siapa kursus ini ?</h3>
      <ul className="list-none space-y-1">
        {targetAudience.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-green-500">✔️</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Curriculum;