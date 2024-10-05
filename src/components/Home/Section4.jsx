import { Link } from 'react-router-dom';
import Img from '../../assets/home/section4/img1.png';

export default function Section4() {
  return (
    <section className="mt-40 max-w-screen-xl mx-auto px-4 py-44">
        <div className="grid grid-cols-2 gap-14 max-md:grid-cols-1 items-center">
          <div className="relative min-h-[500px]">
            <img src={Img} alt="" className="max-w-[500px] mx-auto w-full" />
          </div>

          <div>
            <h2 className="text-4xl font-semibold uppercase">
              Hospital Management
              <br />
              <span className="text-[#8ABC3E]">Software Company</span>
            </h2>

            <p className="mt-12">
              Super Dr is India's first and most comprehensive ecosystem
              dedicated to making healthcare services simpler, accurate and
              credible for everyone. Our mission is to connect doctors, allied
              services and patients to drive credible and accurate health care
              services.
            </p>

            <h3 className="text-lg font-medium mt-16">Our Mission</h3>

            <p className="mt-2">
              We aim to pioneer an innovative, free, cloud-based model for
              patients to store, share and consult health care professionals.
            </p>

            <Link
              to="/super-dr-modules"
              className="block mt-8 w-max rounded-full px-14 py-4 bg-[#0065C0] hover:bg-[#1a74c6] transition-colors text-white font-medium text-lg"
            >
              Super Dr Modules
            </Link>
          </div>
        </div>
      </section>
  )
}