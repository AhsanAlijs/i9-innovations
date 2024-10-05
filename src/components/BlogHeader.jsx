import { RiUserFill } from '@remixicon/react';

export default function BlogHeader({ heading, img, author, date, category }) {
  return (
    <section className="max-w-screen-lg mx-auto pt-24 pb-10 mt-32 px-4">
      <h2 className="text-center font-bold text-4xl text-zinc-600">
        {heading}
      </h2>
      
      <div className="mt-12">
      <img src={img} alt="" className="w-full max-h-[600px] aspect-video object-cover rounded-lg " />
      </div>

      <div className="mt-8 flex justify-center items-center gap-4 max-sm:text-xs text-zinc-600">
        <p className="flex gap-2 items-center w-fit">
          <RiUserFill size={20} color="#A3DC2F" />
          By {author}
        </p>
        <span className="text-[#A3DC2F]">●</span>
        <p>
          {date}
        </p>
        <span className="text-[#A3DC2F]">●</span>
        <p>
          {category}
        </p>
      </div>
    </section>
  )
}