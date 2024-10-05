import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import configurations from "../configurations";
import { RiMenu3Line, RiArrowDropDownLine } from "@remixicon/react";
import SmallScreenMenu from "../SmallScreenMenu";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import EnquireNow from "../EnquireNow";

export default function Header() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SmallScreenMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <header className="min-h-screen header-background bg-contain max-sm:bg-cover bg-fixed bg-center bg-no-repeat relative mb-[10rem] flex flex-col gap-4 justify-around">
        <div className="w-full overflow-hidden">
          <nav className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center text-white container mx-auto px-5">
            <div className="shrink-0 lg:hidden">
              <Link to={"/"}>
                <img src="/logo.png" alt="" className="h-20" />
              </Link>
            </div>

            <div className="hidden lg:block">
              <NavigationMenu.Root className="relative z-[1]">
                <NavigationMenu.List className="flex list-none items-center justify-center w-full">
                  <NavigationMenu.Item className="relative">
                    <div className="text-white group flex select-none items-center justify-between gap-1 rounded-sm p-2 text-sm leading-none outline-none data-[state=open]:text-[#A3DC2F]">
                      <NavLink to="/about-us" className="hover:text-[#A3DC2F] transition-colors text-base font-normal">
                        Company
                      </NavLink>
                    </div>
                    {/*
                    <NavigationMenu.Trigger className="text-white group flex select-none items-center justify-between gap-1 rounded-sm p-2 text-sm leading-none outline-none data-[state=open]:text-[#A3DC2F]">
                      <p className="text-base font-normal">
                        Company
                      </p>
                      <RiArrowDropDownLine size={18} className="relative top-0 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden />
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-full left-0 w-max min-w-48">
                      <div className="bg-white/80 backdrop-blur-md p-4 rounded text-[#0065C0] font-medium border shadow-lg">
                        <ul className="flex flex-col gap-2">
                          <li>
                            <NavLink to="/about-us">
                              About
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/about-us">
                              Our team
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/about-us">
                              Portfolio
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </NavigationMenu.Content>
                    */}
                  </NavigationMenu.Item>

                  <NavigationMenu.Item className="relative">
                    <NavigationMenu.Trigger className="text-white group flex select-none items-center justify-between gap-1 rounded-sm p-2 text-sm leading-none outline-none data-[state=open]:text-[#A3DC2F]">
                      <p className="text-base font-normal">
                        Software
                      </p>
                      <RiArrowDropDownLine size={18} className="relative top-0 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden />
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-full left-0 w-max min-w-48">
                      <div className="bg-white/80 backdrop-blur-md p-4 rounded text-[#0065C0] font-medium border shadow-lg">
                        <ul className="flex flex-col gap-2">
                          <li>
                            <NavLink to="/hmis" className="hover:text-[#A3DC2F] transition-colors">
                              HMIS
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/lims" className="hover:text-[#A3DC2F] transition-colors">
                              LIMS
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/emr" className="hover:text-[#A3DC2F] transition-colors">
                              EMR
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/ris-pacs" className="hover:text-[#A3DC2F] transition-colors">
                              RIS-PACS
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/super-dr-modules" className="hover:text-[#A3DC2F] transition-colors">
                              Modules of Super Dr.
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/online-pharmacy" className="hover:text-[#A3DC2F] transition-colors">
                              Online pharmacy
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/polyclinic" className="hover:text-[#A3DC2F] transition-colors">
                              Clinic/Polyclinic
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/healthcare" className="hover:text-[#A3DC2F] transition-colors">
                              Healthcare software solutions
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>

                  <NavigationMenu.Item className="relative">
                    <NavigationMenu.Trigger className="text-white group flex select-none items-center justify-between gap-1 rounded-sm p-2 text-sm leading-none outline-none data-[state=open]:text-[#A3DC2F]">
                      <p className="text-base font-normal">
                        Marketing
                      </p>
                      <RiArrowDropDownLine size={18} className="relative top-0 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden />
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-full left-0 w-max min-w-48">
                      <div className="bg-white/80 backdrop-blur-md p-4 rounded text-[#0065C0] font-medium border shadow-lg">
                        <ul className="flex flex-col gap-2">
                          <li>
                            <NavLink to="/explainer-video" className="hover:text-[#A3DC2F] transition-colors">
                              Explainer Video
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/healthcare-medical" className="hover:text-[#A3DC2F] transition-colors">
                              Healthcare Medical Website
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/customize-clinic" className="hover:text-[#A3DC2F] transition-colors">
                              Clinic Pharmacy Apps Development
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>

                  <NavigationMenu.Item className="relative">
                    <NavigationMenu.Trigger className="text-white group flex select-none items-center justify-between gap-1 rounded-sm p-2 text-sm leading-none outline-none data-[state=open]:text-[#A3DC2F]">
                      <p className="text-base font-normal">
                        Interoperability
                      </p>
                      <RiArrowDropDownLine size={18} className="relative top-0 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden />
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-full left-0 w-max min-w-48">
                      <div className="bg-white/80 backdrop-blur-md p-4 rounded text-[#0065C0] font-medium border shadow-lg">
                        <ul className="flex flex-col gap-2">
                          <li>
                            <NavLink to="/old-data" className="hover:text-[#A3DC2F] transition-colors">
                              Old data
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/maximizing-efficiency" className="hover:text-[#A3DC2F] transition-colors">
                              Maximizing Efficiency
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>

                  {/* <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-3/4 z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                    <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
                  </NavigationMenu.Indicator> */}
                </NavigationMenu.List>
              </NavigationMenu.Root>
            </div>

            <div className="shrink-0 hidden lg:block justify-self-center">
              <Link to={"/"}>
                <img src="/logo.png" alt="" className="h-20" />
              </Link>
            </div>

            <div className="hidden lg:flex gap-8 justify-center items-center">
              {configurations?.site?.routes
                ?.slice(4, 8)
                ?.map((route, index) => (
                  <Link key={index} className="font-normal hover:text-[#A3DC2F] transition-colors text-base" to={route?.path}>
                    {route?.title}
                  </Link>
                ))}
            </div>

            <div className=" flex flex-row items-center justify-end lg:hidden">
              <button
                className="p-2 rounded bg-gray-100/5 transition-all hover:bg-gray-100/20"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <RiMenu3Line size={30} />
              </button>
            </div>
          </nav>

          <h1 className="text-white text-6xl max-xl:text-5xl max-lg:text-4xl font-bold text-center mt-16 max-lg:mt-12 px-2 flex gap-x-2 gap-y-1 items-center justify-center max-[450px]:flex-col">
            <span>Welcome to </span>
            <span className="sr-only">i9</span>
            <span><img src="/logo3.png" alt="" className="h-[1lh]" /></span>
            <span>Innovations</span>
          </h1>
          <p className="text-white  text-4xl max-xl:text-3xl max-lg:text-2xl font-semibold text-center max-lg:mt-4 mt-8 max-w-screen-xl mx-auto px-2">
            Healthcare Excellence for Hospital Management Systems
          </p>
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="tel:+917304073040"
              className="rounded-full px-14 py-4 bg-[#0065C0] text-white font-medium text-lg max-lg:text-base max-sm:text-sm max-lg:px-10 max-sm:px-6 max-sm:py-3 transition-colors hover:bg-[#1a74c6]"
            >
              Call
            </a>
            <Link to="/appointment/1" className="rounded-full px-14 py-4 bg-[#0065C0] text-white font-medium text-lg max-lg:text-base max-sm:text-sm max-lg:px-10 max-sm:px-6 max-sm:py-3 transition-colors hover:bg-[#1a74c6]">
              Take a free demo
            </Link>
          </div>
        </div>

        {/* <article id="enquiry-form" className="max-w-screen-lg w-full mx-auto translate-y-1/2 px-4">
          <div className="bg-white rounded-xl border shadow-2xl p-12">
            <h2 className="font-semibold text-2xl text-center">
              Get a Free trial for 6 Months. Select from over 100 Modules
            </h2>

            <form>
              <div className="grid grid-cols-2 gap-6 mt-10 max-sm:grid-cols-1">
                <input
                  type="text"
                  name="name"
                  className="rounded-full border px-6 py-3"
                  placeholder="Your Full Name"
                />
                <input
                  type="text"
                  name="email"
                  className="rounded-full border px-6 py-3"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  name="phone"
                  className="rounded-full border px-6 py-3"
                  placeholder="Your Mobile number"
                />
                <input
                  type="text"
                  name="hospital"
                  className="rounded-full border px-6 py-3"
                  placeholder="Name of you Hospital"
                />
                <input
                  type="text"
                  name="beds"
                  className="rounded-full border px-6 py-3"
                  placeholder="Number of beds"
                />

                <button type="submit" className="col-span-full justify-self-center px-10 py-2.5 bg-[#0065C0] rounded-full text-white hover:shadow-lg hover:bg-[#1a74c6] transition-all">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </article> */}
        <EnquireNow header={true} />
      </header>
    </>
  );
}
