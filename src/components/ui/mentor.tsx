/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from "next/navigation";
interface MentorProps {
  image: string;
}

const Mentor = ({ image}: MentorProps) => {


  
return (
    <div className="max-w-3xl mx-auto bg-white text-[13px] shadow-md rounded-lg p-6 flex flex-col md:flex-row items-start gap-6">
      {/* Foto Profil */}
      <img
        src={image} 
        alt="Ahmad Rosid Komarudin"
        className="w-28 h-28 rounded-full object-cover"
      />

      {/* Info */}
      <div>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Ahmad Rosid Komarudin
        </h2>

        {/* Stats */}
        <div className="flex flex-wrap text-sm text-slate-600 mb-4 gap-4">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            4.9 Rating Pelatih
          </div>
          <div className="flex items-center gap-1">
            🗨️ 24316 Ulasan
          </div>
          <div className="flex items-center gap-1">
            🎓 77238 Siswa
          </div>
          <div className="flex items-center gap-1">
            📚 17 Kursus
          </div>
        </div>

        {/* Deskripsi */}
        <p className="text-slate-700 mb-2">
          Ahmad Rosid Komarudin adalah Founder & CEO dari Aguna Course. Telah
          memiliki pengalaman lebih dari 5 tahun di dunia Computer Networking.
        </p>
        <p className="text-slate-700 mb-2">
          Saat ini fokus menjalankan operasional Aguna Course dan membuat kursus
          untuk Aguna Course.
        </p>
        <p className="text-slate-700">
          Telah memegang beberapa sertifikasi Internasional. Diantaranya yang
          paling tinggi adalah Mikrotik Certified Trainer & CCIE.
        </p>
      </div>
    </div>
  );
};

export default Mentor;