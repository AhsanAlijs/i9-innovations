import { RiArrowRightDownLine, RiBarChartFill, RiGraduationCapFill, RiGroupFill, RiLoopLeftFill } from "@remixicon/react";
import { Link } from "react-router-dom";

export default function Section1() {
  return (
    <section className="py-48 my-28 max-sm:my-12 max-sm:py-20 max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-2 gap-16 max-lg:grid-cols-1">
        <div>
          <p className="uppercase text-3xl font-medium text-[#A3DC2F] max-sm:text-2xl">
            Benefits
          </p>
          <h2 className="font-bold text-5xl mt-2 max-sm:text-4xl">
            Why you Should Join Our Awesome Team
          </h2>

          <p className="mt-12 text-lg max-sm:text-base">
            Joining i9 Innovations is not just a career move; it's a leap into the future of healthcare technology. Here, you'll not only grow as a professional but also contribute to meaningful change that impacts society at large. We offer a platform where your work directly contributes to enhancing healthcare delivery and patient outcomes.
          </p>

          <p className="text-xl max-sm:text-lg font-medium mt-8">
            Our Mission
          </p>

          <p className="mt-4 text-lg max-sm:text-base">
            We aim to pioneer an innovative, free, cloud-based model for patients to store, share and consult health care professionals.
          </p>

          <div className="flex flex-row items-center justify-center gap-5 mt-12">
            <a href="tel:+917304073040" className="flex flex-row items-center gap-4 px-4 py-2 bg-[#0065C0] rounded-full text-white hover:shadow-lg hover:bg-[#1a74c6] transition-all text-sm">
              <span>Call Now</span>
              <RiArrowRightDownLine />
            </a>

            <Link to="/appointment/1" className="flex flex-row items-center gap-4 px-4 py-2 bg-[#8ABC3E] rounded-full text-white hover:shadow-lg hover:bg-[#76a134] transition-all text-sm">
              <span>Free Demo</span>
              <RiArrowRightDownLine />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 max-[400px]:grid-cols-1">
          <article>
            <div className="rounded-md bg-[#8ABC3E] size-20 max-sm:size-16 flex justify-center items-center">
              <RiGroupFill size={40} className="text-white" />
            </div>
            <h3 className="font-bold text-xl mt-6 max-sm:text-lg">
              Team work
            </h3>
            <p className="text-lg mt-2 max-sm:text-base">
              We're committed to nurturing talent and fostering an environment where innovation thrives.
            </p>
          </article>

          <article>
            <div className="rounded-md bg-[#8ABC3E] size-20 max-sm:size-16 flex justify-center items-center">
              <RiLoopLeftFill size={40} className="text-white" />
            </div>
            <h3 className="font-bold text-xl mt-6 max-sm:text-lg">
              Secured Future
            </h3>
            <p className="text-lg mt-2 max-sm:text-base">
              With us, you'll find endless opportunities for learning, growth, and the chance to work on cutting-edge projects.
            </p>
          </article>

          <article>
            <div className="rounded-md bg-[#8ABC3E] size-20 max-sm:size-16 flex justify-center items-center">
              <RiGraduationCapFill size={40} className="text-white" />
            </div>
            <h3 className="font-bold text-xl mt-6 max-sm:text-lg">
              Learning Opportunity
            </h3>
            <p className="text-lg mt-2 max-sm:text-base">
              Our ethos of intellectual challenge and empowerment means you're not just part of the team.
            </p>
          </article>


          <article>
            <div className="rounded-md bg-[#8ABC3E] size-20 max-sm:size-16 flex justify-center items-center">
              <RiBarChartFill size={40} className="text-white" />
            </div>
            <h3 className="font-bold text-xl mt-6 max-sm:text-lg">
              Upgrade Skills
            </h3>
            <p className="text-lg mt-2 max-sm:text-base">
              We're committed to nurturing talent and fostering an environment where innovation thrives.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}