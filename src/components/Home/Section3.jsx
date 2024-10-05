import Img1 from '../../assets/home/section3/step1.svg'
import Img2 from '../../assets/home/section3/step2.svg'
import Img3 from '../../assets/home/section3/step3.svg'
import Img4 from '../../assets/home/section3/step4.svg'

export default function Section3() {
  return (
    <section className="header-background2 mb-48 relative">
      <div className="max-w-screen-xl mx-auto px-4 pt-16 pb-48">
        <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl text-white text-center font-semibold">
          Why i9 Innovations?
        </h2>

        <p className="text-white text-2xl max-lg:text-xl max-sm:text-lg font-medium text-center mt-4 max-sm:mt-2">
          Your Partner in Healthcare Technology
        </p>

        <div className="absolute bottom-0 left-1/2 grid w-full max-w-screen-xl -translate-x-1/2 translate-y-1/2 grid-cols-4 gap-6 max-lg:static max-lg:translate-x-0 max-lg:translate-y-0 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:mt-12 max-lg:justify-items-center px-4">
          {features.map((item, i) => (<FeatureCard key={`${item.title}${i}`} image={item.image} text={item.text} title={item.title} />))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ image, title, text}) {
  return (
    <article className="bg-white rounded-xl border shadow-2xl p-4 max-w-96">
      <div className="size-12">
        <img src={image} alt="" />
      </div>

      <h3 className="font-medium mt-6 text-2xl">
        {title}
      </h3>

      <p className="text-zinc-600 mt-4">
        {text}
      </p>
    </article>
  )
}

const features = [
  {
    image: Img1,
    title: 'Expertise and Experience',
    text: "With over two decades in the industry, our team of experts brings unparalleled knowledge and insight into each project."
  },
  {
    image: Img2,
    title: 'Global Presence, Local Insight',
    text: "Our international footprint combined with local market understanding ensures solutions that are both globally."
  },
  {
    image: Img3,
    title: 'Innovation at the Core',
    text: "We are committed to innovation, continuously updating our services with the latest in healthcare technology trends."
  },
  {
    image: Img4,
    title: 'Client-Centric Approach',
    text: "Your success is our priority. We work closely with you to ensure our solutions perfectly align with your goals."
  },
]