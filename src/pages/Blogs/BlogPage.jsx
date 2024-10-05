import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDXEditor, headingsPlugin, linkPlugin, listsPlugin } from "@mdxeditor/editor";
import Header from "../../components/Header";
import EnquireNow from "../../components/EnquireNow";
import Footer from "../../components/Footer";
import SideBtn from "../../components/SideBtn";
import BlogHeader from "../../components/BlogHeader";
import LoadingSpinner from "../../components/LoadingSpinner";
import { getBlogPost } from "../../config/firebase";
import PageNotFound from "../404";

export default function BlogPage() {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const blog = await getBlogPost(slug);
        setBlogPost(blog);
      } catch (error) {
        if (error instanceof Error && error.message === 'No such blog exist') setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    setLoading(true);
    getBlog();
  }, []);

  if (error) return <PageNotFound />
  if (loading) return <LoadingSpinner />
  if (!blogPost) return null

  return (
    <>
      <Header title={blogPost.title} />

      <BlogHeader
        heading={blogPost.title}
        img={blogPost.headerImg}
        author={blogPost.author}
        date={new Date(blogPost.createdAt.seconds * 1000).toLocaleDateString('en-IN', { dateStyle: 'medium' })}
        category={blogPost.category}
      />

      <main className="px-4 pb-24">
        <section className="max-w-screen-md mx-auto [&_h2]:mt-10 text-zinc-600">
          <div className="prose prose-zinc max-w-none [&_.mdxeditor]:font-sans mt-4">
            <MDXEditor markdown={blogPost.content} contentEditableClassName="w-full" plugins={[headingsPlugin(), listsPlugin(), linkPlugin()]} readOnly />
          </div>
        </section>
      </main>

      <EnquireNow />
      <Footer />
      <SideBtn />
    </>
  );
}