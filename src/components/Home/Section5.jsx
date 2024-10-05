import { useEffect, useState } from 'react';
import { getTopBlogPosts } from '../../config/firebase';
import { BlogsCard, BlogsCardSkeleton } from '../BlogCard';

export default function Section5() {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      const blogPosts = await getTopBlogPosts(3);
      setBlogs(blogPosts);
      setLoading(false)
    }
    setLoading(true)
    getBlogs();
  }, [])

  return (
    <section className="mt-16 max-w-screen-xl mx-auto px-4 pb-44">
      <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center">
        Our <span className="text-[#8ABC3E]">Blogs</span>
      </h2>

      <p className="text-2xl max-lg:text-xl max-sm:text-lg font-medium text-center uppercase mt-4 max-sm:mt-2">
        Discover our useful resources and read articles on different categories
      </p>

      <div className="grid grid-cols-3 gap-6 mt-12 max-lg:grid-cols-1 max-lg:justify-items-center">
        {loading && [...Array(3)].map((_, i) => <BlogsCardSkeleton key={i} />)}
        {blogs && blogs.map((item, i) => <BlogsCard key={`${item.title}${i}`} item={item} />)}
      </div>
    </section>
  )
}
