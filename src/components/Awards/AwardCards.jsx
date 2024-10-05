export default function AwardCard({title , paragraph , img}) {
  return (
    <>
    <div className='grid grid-cols-[30%_auto] max-sm:grid-cols-1 justify-center p-5 rounded-lg w-[580px] shadow-lg m-3'>
      <div className='pr-5 self-center'>
        <img src={img} width={200} className="shrink-0"/>
      </div>
      <div>
      <h3 className='font-semibold pr-[70px] leading-5 text-lg '>{title}</h3>
      <p className='mt-2 font-normal'>{paragraph}</p>
      {/* <p className='font-bold text-red-400 text-sm'>Read More</p> */}
      </div>
    </div>
    </>
  )
}
