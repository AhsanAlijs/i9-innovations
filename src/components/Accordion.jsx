import * as AccordionRadix from '@radix-ui/react-accordion';
import { RiArrowDropDownLine } from "@remixicon/react";
import React from "react";

const Accordion = ({ index, title, paragraph }) => {
  return (
    <AccordionRadix.Item value={`item-${index}`} className="p-4 rounded-md shadow-md">
      <AccordionRadix.Header className="font-semibold text-lg w-full">
        <AccordionRadix.Trigger className="flex w-full shrink-0 items-center justify-between outline-none group">
          <span className="text-left">{title}</span>
          <RiArrowDropDownLine color="#A3DC2F" size={32} className="shrink-0 group-data-[state=open]:-rotate-180 transition-transform duration-[250] ease-in" />
        </AccordionRadix.Trigger>
      </AccordionRadix.Header>

      <AccordionRadix.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
        {paragraph}
      </AccordionRadix.Content>
    </AccordionRadix.Item>
  );
};

// const Accordion = ({
//   setIsOpen,
//   setActiveFaqIndex,
//   activeFaqIndex,
//   isOpen,
//   index,
//   title,
//   paragraph,
// }) => {
//   return (
//     <div
//       onClick={() => {
//         setIsOpen(!isOpen);
//         setActiveFaqIndex(index);
//       }}
//       className="cursor-pointer shadow-md hover:shadow-lg transition-all rounded-xl border px-6 py-5"
//       key={index}
//     >
//       <div className="grid grid-cols-12 items-center">
//         <div className="col-span-11">
//           <h2 className="text-lg font-bold">
//             {index + 1}. {title}
//           </h2>
//         </div>
//         <div className="col-span-1 flex flex-row justify-end">
//           {isOpen && activeFaqIndex === index ? (
//             <RiArrowDownSLine
//               onClick={() => {
//                 setIsOpen(false);
//                 setActiveFaqIndex(null);
//               }}
//               size={25}
//               className="cursor-pointer"
//               color="#A3DC2F"
//             />
//           ) : (
//             <RiArrowRightSLine
//               onClick={() => {
//                 setIsOpen(true);
//                 setActiveFaqIndex(index);
//               }}
//               size={25}
//               className="cursor-pointer"
//               color="#A3DC2F"
//             />
//           )}
//         </div>
//       </div>
//         <div
//           className={` ${
//             isOpen && activeFaqIndex === index ? "block" : "hidden"
//           } p-2`}
//         >
//           <p>{paragraph}</p>
//         </div>
//     </div>
//   );
// };

export default Accordion;
