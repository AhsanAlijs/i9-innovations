import { RiSearchLine } from "@remixicon/react"

export default function Section2() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-44">
      <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center">
        What is <span className="text-[#8ABC3E]">Explainer Video</span> and How it Helps Your Business
      </h2>

      <div className="grid grid-cols-3 gap-8 mt-12 max-sm:grid-cols-2">
        {explainerVideo.map((item, i) => (
            <div key={`${item.title}${i}`} className={`rounded-3xl p-12 flex justify-center items-center flex-col gap-4 ${item.altStyle ? 'bg-[#0065C0]' : 'bg-slate-50'}`}>
              <div className={`bg-white p-4 rounded-full size-20 flex items-center justify-center ${item.altStyle ? 'bg-white/50' : 'bg-white'}`}>
                <RiSearchLine size={48} className={`hover:rotate-90 duration-500 transition-all ${item.altStyle ? 'text-white' : 'text-[#0065C0]'}`} />
              </div>
              <p className={`${item.altStyle ? 'text-white' : 'text-black'}`}>
                {item.title}  
              </p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

const explainerVideo = [
  { title: 'Brand Recognition', altStyle: false },
  { title: 'Grabs Attention', altStyle: true },
  { title: 'Strong Impression', altStyle: false },
  { title: 'Brand Identity', altStyle: false },
  { title: 'Separates Competition', altStyle: false },
  { title: 'Brand Loyalty', altStyle: false },
]