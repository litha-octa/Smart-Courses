/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';


const Curriculum = ({data}:{data:any}) => {
  return (
    <div className="text-[13px] mx-auto py-10 px-4">
      {data?.curiculum?.map((module:{title:string, videos:string, duration:string}, index:number) => (
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