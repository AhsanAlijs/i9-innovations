import { RiArrowRightDownLine } from "@remixicon/react"
import Img from "../../assets/explainervideo/section1/img.png"

export default function Section1() {
  return (
    <section className="mt-20 py-36 max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 justify-items-center items-center">
        <div>
          <img src={Img} alt="" className="" />
        </div>

        <div>
          <h2 className="font-semibold text-4xl">
            <span className="text-[#8ABC3E]">Healthcare and Medical</span> Explainer Videos
          </h2>

          <p className="text-lg mt-6">
            At i9, we understand the importance of a lasting logo. Our experienced designers listen to your needs, crafting logos that convey your brand's name, sincerity, and dedication. With a futuristic approach, we ensure your logo stands out, attracting attention and respect for your business.
          </p>

          <div className="flex flex-row items-center gap-5 mt-12">
            <a href="tel:+917304073040" className="flex flex-row items-center gap-4 px-4 py-2 bg-[#0065C0] rounded-full text-white hover:shadow-lg hover:bg-[#1a74c6] transition-all text-sm">
              <span>Call Now</span>
              <RiArrowRightDownLine />
            </a>

          <a href="#enquiry-form" className="flex flex-row items-center gap-4 px-4 py-2 bg-[#8ABC3E] rounded-full text-white hover:shadow-lg hover:bg-[#76a134] transition-all text-sm">
            <span>Free Demo</span>
            <RiArrowRightDownLine />
          </a>
        </div>
        </div>
      </div>
    </section>
  )
}