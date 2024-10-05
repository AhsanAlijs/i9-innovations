import { RiFileListLine, RiFilePdf2Line, RiPhoneLine, RiSurveyLine, RiWhatsappLine } from "@remixicon/react";
import { Link } from "react-router-dom";

export default function SideBtn() {
  return (
    <aside className="fixed z-50 bottom-8 right-0">
      <ul className="flex flex-col gap-4 items-center justify-end">
        <li className="h-12 w-16 p-2 max-sm:h-10 max-sm:w-12 max-sm:p-1 flex justify-start items-center bg-[#0065C0] rounded-l-full shadow-lg translate-x-1/4 hover:translate-x-0 transition-transform">
          <a title="Enquiry form" href="#enquiry-form" className="block text-white hover:text-[#A3DC2F] transition-colors w-full">
            <RiFileListLine className="max-sm:size-6 size-7" />
          </a>
        </li>
        <li className="h-12 w-16 p-2 max-sm:h-10 max-sm:w-12 max-sm:p-1 flex justify-start items-center bg-[#0065C0] rounded-l-full shadow-lg translate-x-1/4 hover:translate-x-0 transition-transform">
          <Link title="Referral form" to="/join-our-network" className="block text-white hover:text-[#A3DC2F] transition-colors w-full">
            <RiSurveyLine className="max-sm:size-6 size-7" />
          </Link>
        </li>
        <li className="h-12 w-16 p-2 max-sm:h-10 max-sm:w-12 max-sm:p-1 flex justify-start items-center bg-[#0065C0] rounded-l-full shadow-lg translate-x-1/4 hover:translate-x-0 transition-transform">
          <a title="Connect to WhatsApp" href="https://api.whatsapp.com/send?phone=+917304073040&text=Hello,%20I%20would%20like%20to%20know%20more%20about%20our%20Services" className="block text-white hover:text-[#A3DC2F] transition-colors w-full">
            <RiWhatsappLine className="max-sm:size-6 size-7" />
          </a>
        </li>
        <li className="h-12 w-16 p-2 max-sm:h-10 max-sm:w-12 max-sm:p-1 flex justify-start items-center bg-[#0065C0] rounded-l-full shadow-lg translate-x-1/4 hover:translate-x-0 transition-transform">
          <a title="Call us" href="tel:+917304073040" className="block text-white hover:text-[#A3DC2F] transition-colors w-full">
            <RiPhoneLine className="max-sm:size-6 size-7" />
          </a>
        </li>
        <li className="h-12 w-16 p-2 max-sm:h-10 max-sm:w-12 max-sm:p-1 flex justify-start items-center bg-[#0065C0] rounded-l-full shadow-lg translate-x-1/4 hover:translate-x-0 transition-transform">
          <a title="Original Concept Document SuperDr HNP" href="/The-Original-Concept-Document-SuperDr-HNP.pdf" className="block text-white hover:text-[#A3DC2F] transition-colors w-full">
            <RiFilePdf2Line className="max-sm:size-6 size-7" />
          </a>
        </li>
      </ul>
    </aside>
  )
}