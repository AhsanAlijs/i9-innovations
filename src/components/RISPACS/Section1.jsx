import { Link } from "react-router-dom"
import Img from "../../assets/rispacs/section1/rispacs1.png"
import { RiArrowRightDownLine } from "@remixicon/react"

export default function Section1() {
  return (
    <section className="py-36 max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 justify-items-center">
        <div>
          <img src={Img} alt="" />
        </div>

        <div className="bg-[#0065C0] text-white rounded-lg p-8 shadow-md">
          <h2 className="text-xl font-medium">
            Exploring RIS, PACS, and Mobile Imaging with Super Dr
          </h2>

          <p className="text-lg mt-6 text-white">
            The fields of Radiology Information Systems (RIS) and Picture
            Archiving and Communication Systems (PACS) have fundamentally
            transformed the landscape of medical imaging and radiology.
            Originating from the necessity to manage and store vast amounts
            of imaging data efficiently, RIS and PACS have become
            indispensable in modern healthcare. Let's explore their origins,
            functionalities, and how Super Dr is pioneering mobile PACS,
            particularly for CATHLAB images.
          </p>

          <div className="flex flex-row items-center justify-center gap-5 mt-12">
            <a href="tel:+917304073040" className="flex flex-row items-center gap-4 px-4 py-2 text-[#0065C0] rounded-full bg-white hover:shadow-lg hover:bg-[#eee] transition-all text-sm">
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