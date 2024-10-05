import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from "@remixicon/react"
import { Link } from "react-router-dom"


export default function Footer() {
  return (
    <footer>
        <div className="header-background2 py-36">
          <div className="max-w-screen-xl mx-auto grid grid-cols-[2fr_1fr_1fr] max-sm:grid-cols-1 gap-6 px-4 text-white">
            <div className="max-sm:justify-self-center">
              <img src="/logo.png" alt="" className="h-20" />
              <p className='text-white max-w-xs text-lg mt-4'>
                Where we harness the power of technology to transform Hospitals in India. With offices in Mumbai, Pune, Mangalore and Dubai.
              </p>
              <div className='mt-4 flex gap-4'>
                <a href="https://twitter.com/i9innovations" target="_blank" className='size-12 bg-white rounded-full flex justify-center items-center text-[#A3DC2F]'>
                  <RiTwitterFill size={24} />
                </a>
                <a href="https://www.facebook.com/i9innovations" target="_blank" className='size-12 bg-white rounded-full flex justify-center items-center text-[#A3DC2F]'>
                  <RiFacebookFill size={24} />
                </a>
                <a href="https://www.instagram.com/i9_innovations_educations" target="_blank" className='size-12 bg-white rounded-full flex justify-center items-center text-[#A3DC2F]'>
                  <RiInstagramFill size={24} />
                </a>
                <a href="https://in.linkedin.com/company/i9-innovations-&-educations" target="_blank" className='size-12 bg-white rounded-full flex justify-center items-center text-[#A3DC2F]'>
                  <RiLinkedinFill size={24} />
                </a>
                <a href="https://www.youtube.com/channel/UCNmVhP7TQm-6SrZf79hfcOA" target="_blank" className='size-12 bg-white rounded-full flex justify-center items-center text-[#A3DC2F]'>
                  <RiYoutubeFill size={24} />
                </a>
              </div>
            </div>
            <div>
              <h2 className='text-xl font-semibold'>
                Quick links
              </h2>
              <ul className='columns-2 mt-12 *:mb-2 font-light'>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About us</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/awards">Awards</Link>
                </li>
                <li>
                  <Link to="/career">Career</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='text-xl font-semibold'>
                Address
              </h2>
              <p className='font-light'>
                Mumbai | Faridabad | Pune | Dubai
              </p>
              <h2 className='text-xl font-semibold mt-8'>
                Contact us
              </h2>
              <a href="tel:+917304073040" className='font-light block'>
                +91 73040 73040
              </a>
              <a href="mailto:info@i9innovations.in" className='font-light block'>
                info@i9innovations.in
              </a>
            </div>
          </div>
        </div>

        <p className='bg-[#006FAF] p-8 text-center text-white text-sm font-light'>
          COPYRIGHT &copy; 2015 - 2024 I9 INNOVATIONS & EDUCATIONS PVT, LTD. |PRIVACY POLICY| DISCLAIMER| ALL RIGHTS RESERVED
        </p>
      </footer>
  )
}