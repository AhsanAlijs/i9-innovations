import { RiArrowRightDownLine } from "@remixicon/react"
import Img from "../../assets/clinicpolyclinic/section1/img1.png"
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
            Comprehensive Clinic Management Excellence at <span className="text-[#8ABC3E]">i9 Innovations</span>
          </h2>

          <p className="text-lg mt-6">
          Revolutionize your clinic operations with i9 Innovations' Clinic Management System, an advanced software solution designed to enhance efficiency, streamline operations, and elevate patient care.
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