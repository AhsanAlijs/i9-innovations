import { RiArrowDropLeftLine, RiArrowDropRightLine } from "@remixicon/react"
import { DayPicker } from "react-day-picker"

export default function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={"p-4 flex justify-center"}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 items-center",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-zinc-200 hover:text-[#0065C0] h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: `relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-[#0065C0] [&:has([aria-selected])]:text-white [&:has([aria-selected].day-range-end)]:rounded-r-md ${props.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"}`,
        day: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-zinc-200 h-8 w-8 p-0 font-normal aria-selected:opacity-100",
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-[#0065C0] text-white hover:bg-[#0065C0] hover:text-white focus:bg-[#0065C0] focus:text-white",
        day_today: "bg-zinc-200 text-[#0065C0] aria-selected:text-white aria-selected:bg-[#0065C0]",
        day_outside: "day-outside opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-zinc-200 aria-selected:text-[#0065C0]",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <RiArrowDropLeftLine className="h-4 w-4" />,
        IconRight: ({ ...props }) => <RiArrowDropRightLine className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
