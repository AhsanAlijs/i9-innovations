import { useState } from "react";
import { RiArrowDownSLine, RiArrowRightSLine } from "@remixicon/react";

export default function Section2() {
  const [accordianOpen, setAccordianOpen] = useState(false);
  const [activeAccordian, setActiveAccordian] = useState(null);
  
  return (
    <section className="py-36 bg-slate-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <p className="text-[#A3DC2F] uppercase text-center font-medium text-lg max-sm:text-base">
          Come join us
        </p>

        <h2 className="text-[#0065C0] text-center text-6xl font-bold mt-4 max-sm:text-5xl">
          Career Openings
        </h2>

        <p className="max-w-screen-sm text-center text-lg mt-4 mx-auto max-sm:text-base">
          At i9 Innovations & Educations we're not just offering jobs; we're offering pathways to make a tangible impact in the healthcare sector.
        </p>

        <div className="grid grid-cols-[1fr_3fr] gap-4 mt-24 max-sm:grid-cols-1">
          <div className="max-sm:justify-self-center">
            <ul className="flex flex-col gap-2 text-lg font-medium uppercase">
              <li><a href="#">HR & Admin</a></li>
              <li><a href="#" className="text-orange-500">Engineering</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Digital Marketing</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            {
              devJobs.map((job, i) => (
                <Accordion2
                  key={`${job.title}${job.title}`}
                  description={job.description}
                  index={i}
                  isOpen={accordianOpen}
                  setIsOpen={setAccordianOpen}
                  activeFaqIndex={activeAccordian}
                  setActiveFaqIndex={setActiveAccordian}
                >
                <div className="grid grid-cols-[2fr_1fr_1fr] max-sm:grid-cols-2 justify-between gap-2 items-center">
                  <h3 className="font-medium text-lg max-sm:col-span-full">
                    {job.title}
                  </h3>

                  <p className="flex flex-col gap-2">
                    <span className="text-zinc-400">Experience</span>
                    <span className="text-lg font-medium">{job.experience}</span>
                  </p>

                  <p className="flex flex-col gap-2">
                    <span className="text-zinc-400">Deadline</span>
                    <span className="text-lg font-medium">{job.deadline}</span>
                  </p>
                </div>
                </Accordion2>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

const devJobs = [
  {
    title: 'Wordpress Developer',
    experience: '2 Years',
    deadline: '2021-05-08',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum nulla at tempora a cumque vero repellendus expedita quia unde, delectus quos aliquid temporibus et ut eaque. Tenetur, ipsam aperiam!'
  },
  {
    title: 'Javascript Developer',
    experience: '1 Years',
    deadline: '2021-05-08',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum nulla at tempora a cumque vero repellendus expedita quia unde, delectus quos aliquid temporibus et ut eaque. Tenetur, ipsam aperiam!'
  },
  {
    title: 'Apps Developer',
    experience: '3 Years',
    deadline: '2021-05-08',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum nulla at tempora a cumque vero repellendus expedita quia unde, delectus quos aliquid temporibus et ut eaque. Tenetur, ipsam aperiam!'
  },
]

function Accordion2({
  setIsOpen,
  setActiveFaqIndex,
  activeFaqIndex,
  isOpen,
  index,
  description,
  children
}) {
  return (
    <article className="bg-white px-4 py-6 rounded-md shadow-md grid grid-cols-[1fr_10%] justify-between items-center gap-4">
      {children}

      {isOpen && activeFaqIndex === index ? (
        <button className="justify-items-center" onClick={() => {
          setIsOpen(false);
          setActiveFaqIndex(null);
        }}>
          <RiArrowDownSLine size={24} color="#A3DC2F" />
        </button>
      ) : (
        <button className="justify-items-center" onClick={() => {
          setIsOpen(true);
          setActiveFaqIndex(index);
        }}>
          <RiArrowRightSLine size={24} color="#A3DC2F" />
        </button>
      )}

      <div className={`${isOpen && activeFaqIndex === index ? "block" : "hidden"} transition-all col-span-full row-start-2`}>
        <p>{description}</p>
      </div>
    </article>
  );
};

