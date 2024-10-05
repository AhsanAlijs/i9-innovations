import { useMemo, useState } from "react";
import { RiAddLine, RiArrowRightDoubleLine, RiCloseLine, RiDeleteBinLine } from "@remixicon/react";
import * as Dialog from '@radix-ui/react-dialog';
import { Link, useOutletContext } from "react-router-dom";
import { BlockTypeSelect, BoldItalicUnderlineToggles, ListsToggle, MDXEditor, UndoRedo, listsPlugin, headingsPlugin, linkPlugin, toolbarPlugin, CreateLink, linkDialogPlugin } from '@mdxeditor/editor'
import { createBlogPost, deleteBlog, deleteFile, getBlogPosts, uploadFile } from "../../config/firebase";
import Pagination from "../Pagination";
import LoadingSpinner from "../LoadingSpinner";
import { paginateArray } from "../../utils/functions";
import slugify from "slugify";

export default function BlogsList() {
  const [formData, setFormData] = useState({
    title: '',
    headerImg: null,
    description: '',
    author: '',
    category: '',
    content: '',
  })

  const { blogsList, setBlogsList } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteBlogId, setDeleteBlogId] = useState(null);
  const [deleteBlogImg, setDeleteBlogImg] = useState(null);

  const paginatedArr = useMemo(() => paginateArray(blogsList, 10), [blogsList]);

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

  const handleDelete = async () => {
    setLoading(true)
    try {
      await deleteBlog(deleteBlogId);
      await deleteFile(`blogs/${deleteBlogImg}-header-img`)
      const blogs = await getBlogPosts();
      setBlogsList(blogs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setIsDeleteModalOpen(false);
      setDeleteBlogId(null);
      setDeleteBlogImg(null);
    }
  }

  const openDeleteModal = (id, slug) => {
    setIsDeleteModalOpen(true);
    setDeleteBlogId(id);
    setDeleteBlogImg(slug);
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

      const headerImgUrl = await uploadImage(slug);
      await createBlogPost({ ...formData, headerImg: headerImgUrl, slug })
      
      const blogs = await getBlogPosts();
      setBlogsList(blogs);

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

  return (
    <div className="bg-white rounded-lg p-8 max-lg:p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold max-sm:text-xl">
          List of Blogs ({blogsList.length})
        </h2>

        {loading && <LoadingSpinner />}

        <Dialog.Root open={isFormModalOpen} onOpenChange={setIsFormModalOpen}>
          <Dialog.Trigger asChild>
            <button className="px-3 py-2.5 bg-[#0065C0] rounded-md text-white hover:shadow-lg hover:bg-[#1a74c6] flex items-center justify-center">
              <RiAddLine size={18} />
              Create a new blog
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 h-[90vh] w-[90vw] max-w-screen-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none overflow-y-auto flex flex-col gap-4 [scrollbar-width:thin]">
              <Dialog.Title className="text-[#0065C0] text-lg uppercase font-semibold">
                New Blog
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
                      <input required type="file" name="headerImg" className="sr-only" accept="image/*" onChange={handleFileChange} />
                    </label>

                    {formData.headerImg ? 
                      <img src={URL.createObjectURL(formData.headerImg)} alt="" className="max-w-52 object-cover h-full w-full rounded-md" />
                      :
                      <div />
                    }
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="content" className="text-sm">Content</label>
                    <div className="w-full min-h-80 rounded-md border p-3 [&_.mdxeditor]:font-sans [&_.mdxeditor-root-contenteditable>*]:min-h-60">
                      <MDXEditor markdown={formData.content} contentEditableClassName="w-full prose" onChange={(e) => setFormData((s) => ({ ...s, content: e }))} plugins={[headingsPlugin(), listsPlugin(), linkPlugin(), linkDialogPlugin(), toolbarPlugin({
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

      <div className="mt-10 w-full overflow-x-auto [scrollbar-width:thin]">
        {blogsList.length === 0 ?
          <p>No blogs</p>
          :
          <table className="w-full [&_td]:text-center [&_tr]:border-b [&_td]:py-4 max-sm:text-sm">
            <thead>
              <tr className="text-[#0065C0] font-medium">
                <td>Title</td>
                <td>Author</td>
                <td>Date</td>
                <td>Details</td>
                <td>Action</td>
              </tr>
            </thead>

            <tbody>
              {paginatedArr[currentPage - 1].map((blog, i) => (
                <tr key={`${blog.id}-${i}`}>
                  <td>{blog.title}</td>
                  <td>{blog.author}</td>
                  <td>{new Date(blog.createdAt.seconds * 1000).toLocaleDateString('en-IN', { dateStyle: 'medium' })}</td>
                  <td>
                    <Link to={`/dashboard/blogs/${blog.id}`} state={{ blog }} className="text-[#0065C0] underline hover:decoration-transparent transition-colors flex justify-center items-center group">
                      <span>View Details</span>
                      <RiArrowRightDoubleLine size={18} color="#0065C0" className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => openDeleteModal(blog.id, blog.slug)} className="text-red-600 underline hover:decoration-transparent transition-colors flex justify-center items-center group w-full">
                      <RiDeleteBinLine size={20} className="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }

        <Dialog.Root open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none">
              <Dialog.Description className="text-zinc-800 mt-[10px] mb-5 leading-normal" asChild>
                <div className="flex gap-4 flex-col">
                  <p>Are you sure you want to delete this blog?</p>
                </div>
              </Dialog.Description>
              <div className="mt-6 flex gap-4 justify-end items-center">
                <button onClick={handleDelete} className="p-2 text-sm bg-red-600 text-white rounded-md">
                  Yes
                </button>
                <Dialog.Close asChild>
                  <button className="p-2 text-sm border rounded-md">
                    No
                  </button>
                </Dialog.Close>
              </div>

              <Dialog.Close asChild>
                <button className="text-[#0065C0] absolute top-2 right-2 inline-flex size-6 appearance-none items-center justify-center rounded-full" aria-label="Close">
                  <RiCloseLine size={24} />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

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

        <div className="mt-4">
          <Pagination page={currentPage} count={paginatedArr.length} onChange={setCurrentPage} />
        </div>
      </div>
    </div>
  )
}