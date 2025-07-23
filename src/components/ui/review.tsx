'use client';
import { useRouter } from "next/navigation";
type Review = {
  name: string;
  timeAgo: string;
  content: string;
  avatar?: string;
  rating: number;
};

const reviews: Review[] = [
  {
    name: "Arsyad Dhiyaul Haq",
    timeAgo: "16 hari yang lalu",
    content: "bagus saya suka, sangat bermanfaat dan ilmunya sangat mudah dipahami",
    rating: 5,
  },
  {
    name: "Rafif Firjatullah",
    timeAgo: "18 hari yang lalu",
    content: "Mantap",
    rating: 5,
  },
  {
    name: "Januarius Y N Henakin",
    timeAgo: "19 hari yang lalu",
    content: "Penjelasan yang sangat jelas",
    rating: 5,
  },
  {
    name: "Rian Hilman",
    timeAgo: "2 bulan yang lalu",
    content: "Kelas ini sungguh menakjubkan banyak ilmu yang saya dapat disini",
    avatar: "https://via.placeholder.com/80x80", // Ganti dengan avatar asli
    rating: 5,
  },
];
const Review = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {reviews.map((review, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-4 py-6 border-t border-slate-200">
          {/* Avatar */}
          <div className="w-16 h-16 flex-shrink-0">
            <img
              src={review.avatar || "https://via.placeholder.com/80x80?text=👤"}
              alt={review.name}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h4 className="font-semibold text-slate-800">{review.name}</h4>
              <span className="text-sm text-slate-500">{review.timeAgo}</span>
            </div>

            {/* Stars */}
            <div className="flex items-center mt-1 mb-2 text-yellow-400">
              {Array.from({ length: review.rating }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.284 3.946a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.445a1 1 0 00-.364 1.118l1.285 3.946c.3.921-.755 1.688-1.538 1.118l-3.36-2.445a1 1 0 00-1.176 0l-3.36 2.445c-.782.57-1.837-.197-1.538-1.118l1.285-3.946a1 1 0 00-.364-1.118L2.077 9.373c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.284-3.946z" />
                </svg>
              ))}
            </div>

            <p className="text-slate-700">{review.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Review;