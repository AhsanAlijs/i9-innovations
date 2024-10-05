import { Link } from "react-router-dom";

export function BlogsCard({ item }) {
  return (
    <article className="rounded-2xl p-1 shadow-lg border overflow-hidden max-w-96 relative">
      <img src={item.headerImg} alt="" className="rounded-t-2xl h-52 w-full object-cover"/>

      <div className="p-4 flex flex-col gap-4">
        <p className="bg-orange-600 px-2 py-1 rounded-full font-light text-sm w-max text-white">
          {item.category}
        </p>

        <h3 className="text-2xl font-medium">
          {item.title}
        </h3>

        <p className="text-zinc-500 line-clamp-2">{item.description}</p>

        <div className="flex justify-between items-center gap-2">
          <Link to={`/blogs/${item.slug}`} className="text-[#0065C0] transition-colors hover:text-[#1a74c6]">
            Read more
          </Link>

          <Link to={`/blogs/${item.slug}`} aria-hidden className="absolute inset-0 w-full h-full" />

          <time className="text-zinc-500 text-sm">
            {new Date(item.createdAt.seconds * 1000).toLocaleDateString('en-IN', {dateStyle: 'medium'})}
          </time>
        </div>
      </div>
    </article>
  )
}

export function BlogsCardSkeleton() {
  return (
    <div className="rounded-2xl p-1 shadow-lg border overflow-hidden max-w-96 relative animate-pulse cursor-pointer">
      <div className="rounded-t-2xl h-52 w-full bg-zinc-200" />

      <div className="p-4 flex flex-col gap-4">
        <div className="bg-zinc-200 rounded-full w-12 h-4" />

        <div className="bg-zinc-200 rounded-full w-full h-2" />

        <div className="bg-zinc-200 rounded-full w-full h-2" />

        <div className="flex justify-between items-center gap-2">
          <div className="bg-zinc-200 rounded-full w-12 h-2" />

          <div className="bg-zinc-200 rounded-full w-12 h-2" />
        </div>
      </div>
    </div>
  )
}