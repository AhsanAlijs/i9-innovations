import { RiCloseLine } from "@remixicon/react";
import * as Tabs from '@radix-ui/react-tabs';
import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from "react";
import { createJobApplication, getJobs } from "../../config/firebase";
import LoadingSpinner from "../LoadingSpinner";
import { MDXEditor, headingsPlugin, listsPlugin } from "@mdxeditor/editor";
import { sendJobApplicationEmail } from "../../config/email";

export default function Section3() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getAllJobs = async () => {
      const jobs = await getJobs();
      setJobs(jobs);
    }
    getAllJobs();
  }, []);

  return (
    <section className="py-36 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4 w-full">
        <p className="text-[#A3DC2F] uppercase text-center font-medium text-lg max-sm:text-base">
          Come join us
        </p>

        <h2 className="text-[#0065C0] text-center text-6xl font-bold mt-4 max-sm:text-5xl">
          Career Openings
        </h2>

        <p className="max-w-screen-sm text-center text-lg mt-4 mx-auto max-sm:text-base">
          At i9 Innovations & Educations we're not just offering jobs; we're offering pathways to make a tangible impact in the healthcare sector.
        </p>

        <Tabs.Root defaultValue="tab1" asChild>
          <div className="grid grid-cols-[1fr_3fr] w-full gap-12 px-4 max-md:grid-cols-1 mt-24">
            {jobs.length ?
              <div className="self-start bg-[#0065C0] text-white rounded-md p-6 max-sm:p-2 shadow-md">
                <Tabs.List asChild>
                  <ul className="flex flex-col gap-2 font-medium uppercase items-start">
                    {jobs.map((job, i) => (<Tabs.Trigger key={job.id} value={`tab${i}`} className="data-[state=active]:text-[#A3DC2F]">{job.title}</Tabs.Trigger>))}
                  </ul>
                </Tabs.List>
              </div>
              :
              <></>
            }
            <div>
              {jobs.length ?
                jobs.map((job, i) => (<Tabs.Content key={job.id} value={`tab${i}`}><JobCard jobId={job.id} title={job.title} description={job.description} /></Tabs.Content>))
                :
                <p>No jobs available</p>
              }
            </div>
          </div>
        </Tabs.Root>
      </div>

    </section>
  )
}

function JobCard({ jobId, title, description }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    job: jobId,
  })
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      await createJobApplication(formData);
      await sendJobApplicationEmail({
        name: formData.name,
        email: formData.email,
        jobTitle: title,
        experience: formData.experience,
        phone: formData.phone,
      })
      setLoading(false);
      setIsModalOpen(true);
      setErrorMsg('Your job application has been submitted. ');
    } catch (error) {
      setLoading(false);
      setIsModalOpen(true);
      setErrorMsg('Something went wrong');
    }
  }

  return (
    <>
      <h3 className="uppercase font-semibold text-4xl text-[#0065C0]">
        {title}
      </h3>

      <div className="prose prose-zinc [&_.mdxeditor]:font-sans mt-6">
        <MDXEditor markdown={description} contentEditableClassName="w-full" plugins={[headingsPlugin(), listsPlugin()]} readOnly />
      </div>

      {loading && <LoadingSpinner />}

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

      <Dialog.Root open={isFormModalOpen} onOpenChange={setIsFormModalOpen}>
        <Dialog.Trigger asChild>
          <button className="mt-12 rounded-full px-10 py-4 bg-[#0065C0] hover:bg-[#1a74c6] transition-colors text-white font-medium text-lg">
            Apply Now
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] overflow-y-auto [scrollbar-width:thin] w-[90vw] max-w-prose -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none">
            <Dialog.Title>
              <h1 className="uppercase font-semibold text-2xl text-[#0065C0]">
                {title}
              </h1>
            </Dialog.Title>
            <Dialog.Description className="text-zinc-800 mt-6 text-[15px] leading-normal" asChild>
              <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm">Full name</label>
                  <input id="name" type="text" required name="name" value={formData.name} onChange={handleChange} className="rounded-full border px-6 py-3" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm">Email</label>
                  <input id="email" type="email" required name="email" value={formData.email} onChange={handleChange} className="rounded-full border px-6 py-3" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm">Phone</label>
                  <input id="phone" type="text" required name="phone" value={formData.phone} onChange={handleChange} className="rounded-full border px-6 py-3" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="experience" className="text-sm">Years of experience</label>
                  <input id="experience" type="text" required name="experience" value={formData.experience} onChange={handleChange} className="rounded-full border px-6 py-3" />
                </div>

                <button type="submit" className="col-span-full justify-self-center px-10 py-2.5 bg-[#0065C0] rounded-full text-white hover:shadow-lg hover:bg-[#1a74c6] transition-all">
                  Submit
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
    </>
  )
}
