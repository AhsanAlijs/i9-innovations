import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Img1 from '../../assets/home/section6/sec-testimonial1.png';
import Img2 from '../../assets/home/section6/sec-testimonial2.png';
import Img3 from '../../assets/home/section6/sec-testimonial3.png';
import starImg from '../../assets/home/section6/star.png';

export default function Section6() {
  return (
    <section className="bg-slate-100 py-36 px-4">
      <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center uppercase">
        What <span className="text-[#8ABC3E]">People</span> Are Saying
      </h2>

      <p className="text-2xl max-lg:text-xl max-sm:text-lg font-medium text-center mt-4 max-sm:mt-2">
        Universal Healthcare Solutions
      </p>

      <div className="max-w-screen-xl mx-auto mt-24 py-10">
        <Swiper
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={100}
          pagination={{
            clickable: true,
            el: '.swiper-custom-pagination',
          }}
          modules={[Pagination]}
          className="[&_.swiper-slide]:min-w-72"
        >
          {
            testimonials.map((item, i) => (
              <SwiperSlide key={`${item.name}${i}`}>
                <Slide image={item.image} text={item.text} name={item.name} position={item.position} />
              </SwiperSlide>
            ))
          }

          <div className="swiper-custom-pagination flex gap-2 justify-center mt-4" />
        </Swiper>
      </div>
    </section>
  )
}

function Slide({ image, text, name, position }) {
  return (
    <article className="p-6 bg-white rounded-xl shadow-xl min-w-72 w-full flex flex-col justify-between gap-6">
      <div>
        <img src={starImg} alt="" className="h-6" />

        <p className="mt-8">
          {text}
        </p>
      </div>

      <div className="flex gap-4 items-center">
        {/* <img
          src="/user.svg"
          alt=""
          className="rounded-full size-16 object-cover"
        /> */}

        <div>
          <p className="font-medium">{name}</p>
          <p className="text-zinc-500">{position}</p>
        </div>
      </div>
    </article>
  )
}

const testimonials = [
  {
    image: Img1,
    text: "I was very much impress with the service and advice given for purchasing software for my pathology laboratory. We would recommend to our friend and relative.",
    name: 'Vineet Vasa',
    position: '',
  },
  {
    image: Img2,
    text: "Fantastic!! Worked with these fantastic people,great experience. They will go places.",
    name: 'Dr Umesh khanna',
    position: 'Nephrologist',
  },
  {
    image: Img3,
    text: "Innovative cool! One of the innovative organizations I have come across, in terms of healthcare data management.",
    name: 'Dr Arpit Dave',
    position: 'Orthopedic Surgeon',
  },
  {
    image: Img1,
    text: "Amazing tool! Super amazing and extremely reliable set of people led by a dynamic leader. Truly recommended!",
    name: 'Dr Indu Bubna',
    position: 'Pulmonologist',
  },
  {
    image: Img2,
    text: "Excellent software, using in Surana hospital and research centre since 4 years with patient app and doctor app... Great support.",
    name: 'Mansi Raut',
    position: '',
  },
  {
    image: Img2,
    text: "i9innovations is Best Healthcare IT company in Mumbai. They help their clients to grow business digitally with their expert software services. I had great experience. Friendly environment!",
    name: 'Arpita Singh',
    position: '',
  },
  {
    image: Img2,
    text: "Real good solutions to all your needs. Perfect place to have your own website.",
    name: 'Mamta Mahajan',
    position: '',
  },
];
