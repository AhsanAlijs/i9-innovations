import { useEffect, useState } from 'react';
import { BlogsCard, BlogsCardSkeleton } from '../BlogCard';
import { getBlogPosts } from '../../config/firebase';

export default function Section1() {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      const blogPosts = await getBlogPosts();
      setBlogs(blogPosts);
      setLoading(false);
    }
    setLoading(true);
    getBlogs();
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto mt-36 py-36 px-4">
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 max-lg:justify-items-center">
        {loading && [...Array(6)].map((_, i) => <BlogsCardSkeleton key={i} />)}
        {blogs && blogs.map((item, i) => <BlogsCard key={`${item.title}${i}`} item={item} />)}
      </div>
    </section>
  )
}
