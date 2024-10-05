import { useMemo, useState } from "react";
import { RiAddLine, RiArrowRightDoubleLine, RiCloseLine, RiDeleteBinLine } from "@remixicon/react";
import * as Dialog from '@radix-ui/react-dialog';
import { Link, useOutletContext } from "react-router-dom";
import { BlockTypeSelect, BoldItalicUnderlineToggles, ListsToggle, MDXEditor, UndoRedo, listsPlugin, headingsPlugin, toolbarPlugin } from '@mdxeditor/editor'
import { createJob, deleteJob, getJobs } from "../../config/firebase";
import Pagination from "../Pagination";
import LoadingSpinner from "../LoadingSpinner";
import { paginateArray } from "../../utils/functions";

export default function JobList() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  })

  const { jobsList, setJobsList } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteJobId, setDeleteJobId] = useState(null);

  const paginatedArr = useMemo(() => paginateArray(jobsList, 10), [jobsList]);

  const handleChange = (e) => {
    setFormData((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }))
  }

  const handleDelete = async () => {
    setLoading(true)
    try {
      await deleteJob(deleteJobId);
      const jobs = await getJobs();
      setJobsList(jobs);
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setIsDeleteModalOpen(false);
      setDeleteJobId(null);
    }
  }

  const openDeleteModal = (id) => {
    setIsDeleteModalOpen(true);
    setDeleteJobId(id);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsFormModalOpen(false);

    try {
      await createJob(formData);
      const jobs = await getJobs();
      setJobsList(jobs);
      setLoading(false);
      setIsModalOpen(true);
      setErrorMsg('Your job has been submitted. ');
    } catch (error) {
      setLoading(false);
      setIsModalOpen(true);
      setErrorMsg('Something went wrong');
    }
  }

  return (
    <div className="bg-white rounded-lg p-8 max-lg:p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold max-sm:text-xl">
          List of jobs ({jobsList.length})
        </h2>

        {loading && <LoadingSpinner />}

        <Dialog.Root open={isFormModalOpen} onOpenChange={setIsFormModalOpen}>
          <Dialog.Trigger asChild>
            <button className="px-3 py-2.5 bg-[#0065C0] rounded-md text-white hover:shadow-lg hover:bg-[#1a74c6] flex items-center justify-center">
              <RiAddLine size={18} />
              Create job
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 h-[90vh] w-[90vw] max-w-screen-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none overflow-y-auto flex flex-col gap-4 [scrollbar-width:thin]">
              <Dialog.Title className="text-[#0065C0] text-lg uppercase font-semibold">
                Create Job
              </Dialog.Title>
              <Dialog.Description asChild>
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="title" className="text-sm">Title</label>
                    <input id="title" type="text" required name="title" value={formData.title} onChange={handleChange} className="rounded-md border p-3" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="description" className="text-sm">Description</label>
                    <div className="w-full min-h-80 rounded-md border p-3 [&_.mdxeditor]:font-sans [&_.mdxeditor-root-contenteditable>*]:min-h-60">
                      <MDXEditor markdown={formData.description} contentEditableClassName="w-full prose" onChange={(e) => setFormData((s) => ({ ...s, description: e }))} plugins={[headingsPlugin(), listsPlugin(), toolbarPlugin({
                        toolbarContents: () => (
                          <>
                            {' '}
                            <ListsToggle />
                            <BlockTypeSelect />
                            <UndoRedo />
                            <BoldItalicUnderlineToggles />
                          </>
                        )
                      })]} />
                    </div>
                  </div>

                  <button type="submit" className="max-w-max self-center px-10 py-2.5 bg-[#0065C0] rounded-md text-white hover:shadow-lg hover:bg-[#1a74c6] transition-all">
                    Save
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
        {jobsList.length === 0 ?
          <p>No jobs</p>
          :
          <table className="w-full [&_td]:text-center [&_tr]:border-b [&_td]:py-4 max-sm:text-sm">
            <thead>
              <tr className="text-[#0065C0] font-medium">
                <td>Title</td>
                <td>Details</td>
                <td>Action</td>
              </tr>
            </thead>

            <tbody>
              {paginatedArr[currentPage - 1].map((job, i) => (
                <tr key={`${job.id}-${i}`}>
                  <td>{job.title}</td>
                  <td>
                    <Link to={`/dashboard/job-list/${job.id}`} state={{ job }} className="text-[#0065C0] underline hover:decoration-transparent transition-colors flex justify-center items-center group">
                      <span>View Details</span>
                      <RiArrowRightDoubleLine size={18} color="#0065C0" className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => openDeleteModal(job.id)} className="text-red-600 underline hover:decoration-transparent transition-colors flex justify-center items-center group w-full">
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
                  <p>Are you sure you want to delete this job?</p>
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