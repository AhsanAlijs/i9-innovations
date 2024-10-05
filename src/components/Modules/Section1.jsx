import { RiArrowRightDownLine } from "@remixicon/react"
import Img from "../../assets/modules/section1/img.png"
import { Link } from "react-router-dom"

export default function Section1() {
  return (
    <section className="mt-20 py-36 max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 justify-items-center items-center">
        <div>
          <img src={Img} alt="" className="" />
        </div>

        <div>
          <h2 className="font-semibold text-4xl">
            The <span className="text-[#8ABC3E]">Super Dr</span> and <span className="text-[#8ABC3E]">i9 Innovations</span>
          </h2>

          <p className="text-lg mt-6">
            i9 Innovations stands at the forefront of healthcare technology, offering Super Dr, a comprehensive hospital management system designed to revolutionize healthcare delivery. Super Dr's suite of modules caters to every aspect of hospital operations, from clinical to financial, ensuring a seamless, efficient, and patient-centric healthcare experience.
          </p>

          <div className="flex flex-row items-center gap-5 mt-12">
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
      </div>
    </section>
  )
}