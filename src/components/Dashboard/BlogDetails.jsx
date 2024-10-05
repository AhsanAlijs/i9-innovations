import { useRef, useState } from "react";
import { RiAddLine, RiCloseLine, RiPencilLine, RiUserFill } from "@remixicon/react";
import * as Dialog from '@radix-ui/react-dialog';
import { Link, useLocation, useOutletContext } from "react-router-dom";
import { BlockTypeSelect, BoldItalicUnderlineToggles, ListsToggle, MDXEditor, UndoRedo, listsPlugin, headingsPlugin, toolbarPlugin, linkPlugin, CreateLink, linkDialogPlugin } from '@mdxeditor/editor';
import { editBlogPost, getBlogPosts, uploadFile } from "../../config/firebase";
import LoadingSpinner from "../LoadingSpinner";
import slugify from "slugify";

export default function BlogDetails() {
  const location = useLocation();
  let blog = null;

  if (location.state) {
    blog = location.state.blog
  }

  const { setBlogsList } = useOutletContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: blog.title ?? '',
    description: blog.description ?? '',
    headerImg: blog.headerImg ?? '',
    author: blog.author ?? '',
    category: blog.category ?? '',
    content: blog.content ?? '',
  })

  const [blogData, setBlogData] = useState(() => {
    if (!blog) return null

    return {
      title: blog.title ?? '',
      description: blog.description ?? '',
      headerImg: blog.headerImg ?? '',
      author: blog.author ?? '',
      category: blog.category ?? '',
      content: blog.content ?? '',
      createdAt: blog.createdAt,
    }
  })

  const markdownRef = useRef(null);

  const handleChange = (e) => {
    setFormData((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }))
  }

  const handleFileChange = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFormData((s) => ({ ...s, headerImg: file }));
    }
  }

  const uploadImage = async (name) => {
    const file = formData.headerImg;
    const newName = `blogs/${name}-header-img`;
    const renamedFile = new File([file], newName, { type: file.type, lastModified: file.lastModified });

    const url = await uploadFile(renamedFile);
    return url;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setIsFormModalOpen(false);

    try {
      const slug = slugify(formData.title, {
        lower: true,
        strict: true,
        trim: true,
      })

      let headerImgUrl = formData.headerImg instanceof File ? await uploadImage(slug) : formData.headerImg;
      const data = { ...formData, headerImg: headerImgUrl, slug }

      await editBlogPost(blog.id, data);
      const blogs = await getBlogPosts();
      setBlogsList(blogs);

      setBlogData({ ...data, createdAt: blog.createdAt });
      markdownRef.current?.setMarkdown(formData.content);

      setLoading(false);
      setIsModalOpen(true);
      setErrorMsg('Your blog post has been submitted.');
    } catch (error) {
      console.log(error);
      setLoading(false);
      setIsModalOpen(true);
      setErrorMsg('Something went wrong');
    }
  }

  if (!blogData) return null;

  return (
    <div>
      <div className="bg-white rounded-lg p-8 max-lg:p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold max-sm:text-xl text-[#0065C0]">
            {blogData.title}
          </h2>

          {loading && <LoadingSpinner />}

          <Dialog.Root open={isFormModalOpen} onOpenChange={setIsFormModalOpen}>
            <Dialog.Trigger asChild>
              <button className="shrink-0 px-3 py-2.5 bg-[#0065C0] rounded-md text-white hover:shadow-lg hover:bg-[#1a74c6] flex items-center justify-center">
                <RiPencilLine size={18} />
                Edit blog
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />
              <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 h-[90vh] w-[90vw] max-w-screen-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none overflow-y-auto flex flex-col gap-4 [scrollbar-width:thin]">
                <Dialog.Title className="text-[#0065C0] text-lg uppercase font-semibold">
                  Edit Blog
                </Dialog.Title>
                <Dialog.Description asChild>
                  <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="title" className="text-sm">Title</label>
                      <input id="title" type="text" required name="title" value={formData.title} onChange={handleChange} className="rounded-md border p-3" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="author" className="text-sm">Author</label>
                      <input id="author" type="text" required name="author" value={formData.author} onChange={handleChange} className="rounded-md border p-3" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="category" className="text-sm">Category</label>
                      <input id="category" type="text" required name="category" value={formData.category} onChange={handleChange} className="rounded-md border p-3" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="description" className="text-sm">Short description</label>
                      <textarea required name="description" id="description" rows={4} value={formData.description} onChange={handleChange} className="rounded-md border p-3" />
                    </div>

                    <p className="text-sm">Header image</p>
                    <div className="border-dashed border-2 border-zinc-300 p-4 rounded-md flex justify-between gap-4 items-center h-40">
                      <label className="shrink-0 px-3 py-2 rounded-md bg-[#0065C0] hover:bg-[#1a74c6] transition-colors text-white cursor-pointer">
                        {formData.headerImg ? 'Change image' : 'Upload image'}
                        <input required={!formData.headerImg} type="file" name="headerImg" className="sr-only" accept="image/*" onChange={handleFileChange} />
                      </label>

                      {(formData.headerImg) ?
                        <img src={(formData.headerImg instanceof File ? URL.createObjectURL(formData.headerImg) : formData.headerImg)} alt="" className="max-w-52 object-cover h-full w-full rounded-md" />
                        :
                        <div />
                      }
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="content" className="text-sm">Content</label>
                      <div className="w-full min-h-80 rounded-md border p-3 [&_.mdxeditor]:font-sans [&_.mdxeditor-root-contenteditable>*]:min-h-60">
                        <MDXEditor markdown={formData.content} contentEditableClassName="w-full prose max-w-none" onChange={(e) => setFormData((s) => ({ ...s, content: e }))} plugins={[headingsPlugin(), listsPlugin(), linkPlugin(), linkDialogPlugin(), toolbarPlugin({
                          toolbarContents: () => (
                            <>
                              {' '}
                              <ListsToggle />
                              <BlockTypeSelect />
                              <UndoRedo />
                              <BoldItalicUnderlineToggles />
                              <CreateLink />
                            </>
                          )
                        })]} />
                      </div>
                    </div>

                    <button type="submit" className="max-w-max self-center px-10 py-2.5 bg-[#0065C0] rounded-md text-white hover:shadow-lg hover:bg-[#1a74c6] transition-all">
                      Post
                    </button>
                  </form>
                </Dialog.Description>

                <Dialog.Close asChild>
                  <button className="text-[#0065C0] absolute top-2 right-2 inline-flex size-6 appearance-none items-center justify-center rounded-full" aria-label="Close">
                    <RiCloseLine size={24} />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        <div className="mt-12">
          <img src={blogData.headerImg} alt="" className="w-full max-h-[600px] aspect-video object-cover rounded-lg" />
        </div>

        <div className="mt-8 flex justify-center items-center gap-4 max-sm:text-xs text-zinc-600">
          <p className="flex gap-2 items-center w-fit">
            <RiUserFill size={20} color="#A3DC2F" />
            By {blogData.author}
          </p>
          <span className="text-[#A3DC2F]">●</span>
          <p>
            {new Date(blogData.createdAt.seconds * 1000).toLocaleDateString('en-IN', { dateStyle: 'medium' })}
          </p>
          <span className="text-[#A3DC2F]">●</span>
          <p>
            {blogData.category}
          </p>
        </div>

        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none">
              <Dialog.Description className="text-zinc-800 mt-[10px] mb-5 text-[15px] leading-normal" asChild>
                <div className="flex gap-4 flex-col">
                  <p>{errorMsg}</p>
                </div>
              </Dialog.Description>

              <Dialog.Close asChild>
                <button className="text-[#0065C0] absolute top-2 right-2 inline-flex size-6 appearance-none items-center justify-center rounded-full" aria-label="Close">
                  <RiCloseLine size={24} />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <div className="prose prose-zinc max-w-none [&_.mdxeditor]:font-sans mt-4">
          <MDXEditor ref={markdownRef} markdown={blogData.content} contentEditableClassName="w-full" plugins={[headingsPlugin(), listsPlugin(), linkPlugin()]} readOnly />
        </div>
      </div>

      <div className="mt-6">
        <Link to={-1} className="block ml-auto w-max bg-[#0065C0] px-8 py-4 text-lg font-medium text-white rounded-md">
          Back
        </Link>
      </div>
    </div>
  )
}