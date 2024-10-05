export default function LoadingSpinner() {
  return (
    <div role="progressbar" aria-label="loading" className="fixed inset-0 z-50 cursor-wait bg-white/60 transition">
      <div className="flex h-full">
        <svg width="24" height="24" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mx-auto w-full h-auto max-w-[theme('spacing.16')] text-[#0065C0]">
          <g className="spinner_V8m1">
            <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" stroke="currentColor">
            </circle>
          </g>
        </svg>
      </div>
    </div>
  )
}