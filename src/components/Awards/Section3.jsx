import Img1 from '../../assets/awards/section3/sec-certificate1.png';
import Img2 from '../../assets/awards/section3/sec-certificate2.png';
import Img3 from '../../assets/awards/section3/sec-certificate3.png';
import Img4 from '../../assets/awards/section3/sec-certificate4.png';
import Img5 from '../../assets/awards/section3/sec-certificate5.png';
import Img6 from '../../assets/awards/section3/sec-certificate6.png';
import SuperDrAppComponent from '../SuperDrAppComponent';

export default function Section3() {
  return (
    <section className="py-28 max-w-screen-xl mx-auto px-4">
      <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center">
        Our <span className="text-[#8ABC3E]">Certificates</span>
      </h2>

      <div className="mt-12">
        <SuperDrAppComponent cards={cards} />
      </div>
      {/* <div className="flex flex-wrap gap-4 mt-12 justify-center">
        <img src={Img1} alt="" className="max-h-96" />
        <img src={Img2} alt="" className="max-h-96" />
        <img src={Img3} alt="" className="max-h-96" />
        <img src={Img4} alt="" className="max-h-96" />
        <img src={Img5} alt="" className="max-h-96" />
        <img src={Img6} alt="" className="max-h-96" />
      </div> */}
    </section>
  )
}

let cards = [
  {
    title: "Lorem ipsum dolor sit amet.",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolores ullam ab qui et autem nam atque recusandae delectus ex, aspernatur dignissimos quibusdam suscipit tempore eius similique quia dolore nisi harum saepe, explicabo esse eum error? Minima fugiat quia omnis?",
    img: Img1,
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolores ullam ab qui et autem nam atque recusandae delectus ex, aspernatur dignissimos quibusdam suscipit tempore eius similique quia dolore nisi harum saepe, explicabo esse eum error? Minima fugiat quia omnis?",
    img: Img2,
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolores ullam ab qui et autem nam atque recusandae delectus ex, aspernatur dignissimos quibusdam suscipit tempore eius similique quia dolore nisi harum saepe, explicabo esse eum error? Minima fugiat quia omnis?",
    img: Img3,
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolores ullam ab qui et autem nam atque recusandae delectus ex, aspernatur dignissimos quibusdam suscipit tempore eius similique quia dolore nisi harum saepe, explicabo esse eum error? Minima fugiat quia omnis?",
    img: Img4,
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolores ullam ab qui et autem nam atque recusandae delectus ex, aspernatur dignissimos quibusdam suscipit tempore eius similique quia dolore nisi harum saepe, explicabo esse eum error? Minima fugiat quia omnis?",
    img: Img5,
  },
  {
    title: "Lorem ipsum dolor sit amet.",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolores ullam ab qui et autem nam atque recusandae delectus ex, aspernatur dignissimos quibusdam suscipit tempore eius similique quia dolore nisi harum saepe, explicabo esse eum error? Minima fugiat quia omnis?",
    img: Img6,
  },
];