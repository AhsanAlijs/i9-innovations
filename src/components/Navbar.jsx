import React, { useState } from "react";
import Container from "./Container";
import Logo from "../assets/header-logo.png";
import { RiMenu3Line, RiArrowDropDownLine } from "@remixicon/react";
import SmallScreenMenu from "./SmallScreenMenu";
import { Link, NavLink } from "react-router-dom";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const navigations_links = [
  {
    title: "About",
    path: "/about-us",
  },
  {
    title: "Software",
    path: "/software",
  },
  {
    path: "/healthcare",
    title: "Healthcare",
  },
  {
    path: "/online-pharmacy",
    title: "Online pharmacy",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
  {
    title: "Awards",
    path: "/awards",
  },
  {
    title: "ABDM",
    path: "/abdm",
  },
  {
    title: "Career",
    path: "/career",
  },
];
const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SmallScreenMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="absolute w-full top-0 py-4 ">
        <Container>
          <div className=" bg-[#0065C0] text-white rounded-xl">
            <Container>
              <div className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center">
                <div className="hidden lg:block">
                  <NavigationMenu.Root className="relative z-[1]">
                    <NavigationMenu.List className="flex list-none items-center justify-center w-full">
                      <NavigationMenu.Item className="relative">
                        {/* <div className="text-white group flex select-none items-center justify-between gap-1 rounded-sm p-2 text-sm leading-none outline-none data-[state=open]:text-[#A3DC2F]">
                          <NavLink to="/about-us" className="hover:text-[#A3DC2F] transition-colors text-base font-normal">
                            Company
                          </NavLink>
                        </div> */}
                        <NavigationMenu.Trigger className="text-white group flex select-none items-center justify-between gap-1 rounded-sm p-2 text-sm leading-none outline-none data-[state=open]:text-[#A3DC2F]">
                          <p className="text-base font-normal">
                            Company
                          </p>
                          <RiArrowDropDownLine size={18} className="relative top-0 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden />
                        </NavigationMenu.Trigger>

                        <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-full -left-1/2 w-max min-w-48">
                          <div className="bg-white/75 backdrop-blur-sm p-8 rounded-md text-[#0065C0] font-medium shadow-lg">
                            <ul className="flex flex-col gap-2">
                              <li>
                                <NavLink to="/about-us" className="hover:text-[#A3DC2F] transition-colors">
                                  About
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/our-team" className="hover:text-[#A3DC2F] transition-colors">
                                  Our team
                                </NavLink>
                              </li>
                              {/* <li>
                                <NavLink to="/about-us" className="hover:text-[#A3DC2F] transition-colors">
                                  Portfolio
                                </NavLink>
                              </li> */}
                            </ul>
                          </div>
                        </NavigationMenu.Content>
                      </NavigationMenu.Item>

                      <NavigationMenu.Item className="relative">
                        <NavigationMenu.Trigger className="text-white group flex select-none items-center justify-between gap-1 rounded-sm p-2 text-sm leading-none outline-none data-[state=open]:text-[#A3DC2F]">
                          <p className="text-base font-normal">
                            Software
                          </p>
                          <RiArrowDropDownLine size={18} className="relative top-0 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden />
                        </NavigationMenu.Trigger>

                        <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-full -left-1/2 w-max min-w-48">
                          <div className="bg-white/75 backdrop-blur-sm p-8 rounded-md text-[#0065C0] font-medium shadow-lg">
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

                        <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-full -left-1/2 w-max min-w-48">
                          <div className="bg-white/75 backdrop-blur-sm p-8 rounded-md text-[#0065C0] font-medium shadow-lg">
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

                        <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-full -left-1/2 w-max min-w-48">
                          <div className="bg-white/75 backdrop-blur-sm p-8 rounded-md text-[#0065C0] font-medium shadow-lg">
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
                    </NavigationMenu.List>
                  </NavigationMenu.Root>
                </div>
                <div className="justify-self-center">
                  <Link to={"/"}>
                    <img alt="" src={Logo} className="w-[185px]" />
                  </Link>
                </div>
                <ul className="hidden lg:flex flex-row gap-8 justify-center">
                  {navigations_links?.slice(4, 8).map((item, index) => {
                    return (
                      <li key={index}>
                        <NavLink className="font-normal hover:text-[#A3DC2F] transition-colors text-base" to={item.path}>
                          {item.title}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>

                <div className="flex lg:hidden flex-row items-center justify-end">
                  <button
                    className="p-2 rounded bg-gray-100/5 transition-all hover:bg-gray-100/20"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <RiMenu3Line size={30} />
                  </button>
                </div>
              </div>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
