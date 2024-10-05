import { useRef, useState } from "react";
import { RiAddLine, RiCloseLine, RiPencilLine } from "@remixicon/react";
import * as Dialog from '@radix-ui/react-dialog';
import { Link, useLocation, useOutletContext } from "react-router-dom";
import { BlockTypeSelect, BoldItalicUnderlineToggles, ListsToggle, MDXEditor, UndoRedo, listsPlugin, headingsPlugin, toolbarPlugin } from '@mdxeditor/editor';
import { editJob, getJobs } from "../../config/firebase";
import LoadingSpinner from "../LoadingSpinner";

export default function JobDetails() {
  const location = useLocation();
  let job = null;

  if (location.state) {
    job = location.state.job
  }

  const { setJobsList } = useOutletContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: job.title ?? '',
    description: job.description ?? '',
  })
  
  const markdownRef = useRef(null);
  const [jobData, setJobData] = useState(() => {
    if (!job) return null

    return {
      title: job.title ?? '',
      description: job.description ?? '',
    }
  })

  const handleChange = (e) => {
    setFormData((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsFormModalOpen(false);

    try {
      await editJob(job.id, formData);
      const jobs = await getJobs();
      setJobsList(jobs);

      setJobData(formData);
      markdownRef.current?.setMarkdown(formData.description);
      setLoading(false);
      setIsModalOpen(true);
      setErrorMsg('Your job has been submitted. ');
    } catch (error) {
      setLoading(false);
      setIsModalOpen(true);
      setErrorMsg('Something went wrong');
    }
  }

  if (!jobData) return null;

  return (
    <div>
      <div className="bg-white rounded-lg p-8 max-lg:p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold max-sm:text-2xl text-[#0065C0]">
            {jobData.title}
          </h2>

          {loading && <LoadingSpinner />}

          <Dialog.Root open={isFormModalOpen} onOpenChange={setIsFormModalOpen}>
            <Dialog.Trigger asChild>
              <button className="px-3 py-2.5 bg-[#0065C0] rounded-md text-white hover:shadow-lg hover:bg-[#1a74c6] flex items-center justify-center">
                <RiPencilLine size={18} />
                Edit job
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />
              <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 h-[90vh] w-[90vw] max-w-screen-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none overflow-y-auto flex flex-col gap-4 [scrollbar-width:thin]">
                <Dialog.Title className="text-[#0065C0] text-lg uppercase font-semibold">
                  Edit Job
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
          <MDXEditor ref={markdownRef} markdown={jobData.description} contentEditableClassName="w-full" plugins={[headingsPlugin(), listsPlugin()]} readOnly />
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