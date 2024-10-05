import Img1 from '../../assets/rispacs/section2/sec-rispacs1.png';
import Img2 from '../../assets/rispacs/section2/sec-rispacs2.png';
import Img3 from '../../assets/rispacs/section2/sec-rispacs3.png';
import Img4 from '../../assets/rispacs/section2/sec-rispacs4.png';
import Img5 from '../../assets/rispacs/section2/sec-rispacs5.png';
import Img6 from '../../assets/rispacs/section2/sec-rispacs6.png';
// import IncreasingBussinessCard from '../IncreasingBussinessCard';

export default function Section2() {
  return (
    <section className="py-36 max-w-screen-xl mx-auto px-4">
      <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center">
        Understanding <span className="text-[#8ABC3E]">RIS and PACS</span>
      </h2>

      <div className="grid grid-cols-2 gap-8 mt-12 max-md:grid-cols-1">
        {/* {cards?.map((item, index) => {
          return (
            <IncreasingBussinessCard
              imgTop={true}
              index={index}
              item={item}
              cardClassNames={"border gap-4"}
              customImg={
                <div className="flex flex-col mb-4 h-[13rem] items-center justify-center">
                  <img className={``} alt="" src={item?.img} />
                </div>
              }
            />
          );
        })} */}


        <article className="shadow-lg rounded-lg p-8">
          <img
            src={Img1}
            alt=""
            className="h-80 object-contain mx-auto"
          />
          <h3 className="text-xl font-medium mt-4">RIS</h3>
          <p className="mt-4">
          A Radiology Information System (RIS) is a networked software system designed to manage medical imagery and associated data. RIS handles scheduling, tracking radiology imaging orders, billing, and patient record management within radiology departments.
          </p>
        </article>

        <article className="shadow-lg rounded-lg p-8">
          <img
            src={Img2}
            alt=""
            className="h-80 object-contain mx-auto"
          />
          <h3 className="text-xl font-medium mt-4">PACS</h3>
          <p className="mt-4">
            Picture Archiving and Communication System (PACS) revolutionizes how medical imaging studies, like X-rays, CTs, and MRIs, are stored, retrieved, presented, and shared. PACS eliminates the need for traditional film-based images, enabling digital storage and access.
          </p>
        </article>

        <article className="shadow-lg rounded-lg p-8">
          <img
            src={Img3}
            alt=""
            className="h-80 object-contain mx-auto"
          />
          <h3 className="text-xl font-medium mt-4">DICOM</h3>
          <p className="mt-4">
            Digital Imaging and Communications in Medicine (DICOM) is the global standard for handling, storing, printing, and transmitting medical imaging information, ensuring interoperability between different systems and devices.
          </p>
        </article>

        <article className="shadow-lg rounded-lg p-8">
          <img
            src={Img4}
            alt=""
            className="h-80 object-contain mx-auto"
          />
          <h3 className="text-xl font-medium mt-4">
            The Inception of RIS and PACS
          </h3>
          <p className="mt-4">
            The concept of PACS was introduced in the early 1980s, primarily in the United States and Europe, as part of an effort to improve the efficiency of radiology departments. The development of DICOM in the 1990s further facilitated the widespread adoption of PACS by standardizing the communication and management of medical images and related data.
          </p>
        </article>

        <article className="shadow-lg rounded-lg p-8">
          <img
            src={Img5}
            alt=""
            className="h-80 object-contain mx-auto"
          />
          <h3 className="text-xl font-medium mt-4">
            Super Dr: A Game-Changer in Medical Imaging
          </h3>
          <p className="mt-4">
            Super Dr stands out in the Indian healthcare landscape by integrating a built-in PACS within its system, thereby removing the dependency on additional third-party applications. This integration offers a seamless experience for healthcare providers, enabling efficient access and management of medical images directly within the Super Dr platform.
          </p>
        </article>

        <article className="shadow-lg rounded-lg p-8">
          <img
            src={Img6}
            alt=""
            className="h-80 object-contain mx-auto"
          />
          <h3 className="text-xl font-medium mt-4">
            The Pioneer of Mobile PACS for CATHLAB Images
          </h3>
          <p className="mt-4">
            Super Dr is at the forefront of innovation with its mobile PACS capabilities, particularly for CATHLAB images, which are crucial for cardiac diagnostics and interventions. This pioneering approach allows for real-time access to high-quality images, facilitating better clinical decisions and patient outcomes.
          </p>
        </article>
      </div>
    </section>
  )
}

const cards = [
  {
    title: 'RIS',
    paragraph: 'A Radiology Information System (RIS) is a networked software system designed to manage medical imagery and associated data. RIS handles scheduling, tracking radiology imaging orders, billing, and patient record management within radiology departments.'
  }
]