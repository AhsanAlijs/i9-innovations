import { RiArrowDropRightLine, RiArrowDropLeftLine } from "@remixicon/react";

const GROUP_MAX = 5; 
const half = Math.ceil(GROUP_MAX / 2)

export default function Pagination(props) {
  const { page, count, onChange } = props;

  const getButton = (current) => 
    <button key={current} className={`size-8 text-sm flex justify-center items-center rounded-md transition-colors ${page === current ? 'bg-[#0065C0] text-white': 'bg-slate-100 hover:bg-slate-200'}`} onClick={() => onChange(current)}>
      {current}
    </button>

  return (
    <div className="ml-auto w-96 flex flex-row gap-4 justify-center">
      {
        count > 1 && <button className="size-8 text-sm flex justify-center items-center rounded-md bg-slate-100 hover:bg-slate-200 disabled:opacity-40" disabled={page===1} onClick={() => page > 1 && onChange(page - 1)}>
          <RiArrowDropLeftLine size={24} />
        </button>
      }

      {
        count <= GROUP_MAX + 2 ?
          Array(count).fill(0).map((item, index)=> getButton(index + 1)) : 
          <>
            {getButton(1)}
            { page > 1 + half && <span className=" leading-10">...</span> }
            { Array(GROUP_MAX).fill(0).map((item, index)=> {
              const p = page - half + index + 1
              return (p > 1 && p < count) ? getButton(p): ''
            })}
            { page < count - half && <span className=" leading-10">...</span> }
            {getButton(count)}
          </>
      }

      {
        count > 1 && <button className="size-8 text-sm flex justify-center items-center rounded-md bg-slate-100 hover:bg-slate-200 disabled:opacity-40" disabled={page===count} onClick={() => page < count && onChange(page + 1)}>
          <RiArrowDropRightLine size={24} />
        </button>
      }
    </div>
  );
}