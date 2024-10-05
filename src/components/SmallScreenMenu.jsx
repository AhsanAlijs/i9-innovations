import { RiCloseLine } from "@remixicon/react";
import React, { useEffect } from "react";
import * as Accordion from '@radix-ui/react-accordion';
import { RiArrowDropDownLine } from "@remixicon/react";
import configurations from "./configurations";
import { Link, NavLink } from "react-router-dom";

const SmallScreenMenu = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen]);

  return (
    <div
      className={`
    ${isOpen ? "top-0 opacity-100 z-[150]" : "-z-0 opacity-0 -top-[100rem]"}
     absolute left-0 w-full min-h-screen _sm_menu_ backdrop-blur-lg transition-all duration-700 overflow-auto lg:hidden md:block`}
    // onClick={() => {
    //   setIsOpen(!isOpen);
    // }}
    >
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 items-center pb-5 pt-2">
          <div className="shrink-0 flex flex-row items-center ">
            <Link to={"/"}>
              <img src="/logo.png" alt="" className="h-20" />
            </Link>
          </div>
          <div className="flex flex-row items-center justify-end">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <RiCloseLine size={30} color="white" />
            </button>
          </div>
        </div>
        <nav className="flex flex-col items-center justify-center mt-5 gap-7 text-white">
          {/* {configurations?.site?.routes?.map((route, index) => (
            <Link key={index} className="text-center" to={route?.path}>
              {route?.title}
            </Link>
          ))} */}
          <Accordion.Root className="rounded-md text-lg mx-auto w-4/5" type="single" collapsible>
            <Accordion.Item value="item-1">
              <Accordion.Header className="flex gap-2 text-white font-normal">
                <Accordion.Trigger className="flex shrink-0 items-center justify-between outline-none group">
                  Company
                  <RiArrowDropDownLine size={24} className="group-data-[state=open]:-rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="text-white data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden ml-4">
                <ul>
                  <li>
                    <NavLink to="/about-us" className="font-normal">
                      About us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/our-team" className="font-normal">
                      Our team
                    </NavLink>
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-2">
              <Accordion.Header className="flex gap-2 text-white font-normal">
                <Accordion.Trigger className="flex shrink-0 items-center justify-between outline-none group">
                  Software
                  <RiArrowDropDownLine size={24} className="group-data-[state=open]:-rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="text-white data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden ml-4">
                <ul>
                  <li>
                    <NavLink to="/hmis" className="font-normal">
                      HMIS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/emr" className="font-normal">
                      EMR
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/lims" className="font-normal">
                      LIMS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/ris-pacs" className="font-normal">
                      RIS-PACS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/super-dr-modules" className="font-normal">
                      Modules of Super Dr
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/online-pharmacy" className="font-normal">
                      Online Pharmacy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/polyclinic" className="font-normal">
                      Clinic/Polyclinic
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/healthcare" className="font-normal">
                      Healthcare software solutions
                    </NavLink>
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-3">
              <Accordion.Header className="flex gap-2 text-white font-normal">
                <Accordion.Trigger className="flex shrink-0 items-center justify-between outline-none group">
                  Marketing
                  <RiArrowDropDownLine size={24} className="group-data-[state=open]:-rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="text-white data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden ml-4">
                <ul>
                  <li>
                    <NavLink to="/explainer-video">
                      Explainer Video
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/healthcare-medical">
                      Healthcare Medical Website
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/customize-clinic">
                      Clinic Pharmacy Apps Development
                    </NavLink>
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-4">
              <Accordion.Header className="flex gap-2 text-white font-normal">
                <Accordion.Trigger className="flex shrink-0 items-center justify-between outline-none group">
                  Interoperability
                  <RiArrowDropDownLine size={24} className="group-data-[state=open]:-rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="text-white data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden ml-4">
                <ul>
                  <li>
                    <NavLink to="/old-data">
                      Old data
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/maximizing-efficiency">
                      Maximizing Efficiency
                    </NavLink>
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item>
              <NavLink to="/blogs">
                Blogs
              </NavLink>
            </Accordion.Item>
            <Accordion.Item>
              <NavLink to="/awards">
                Awards
              </NavLink>
            </Accordion.Item>
            <Accordion.Item>
              <NavLink to="/abdm">
                ABDM
              </NavLink>
            </Accordion.Item>
            <Accordion.Item>
              <NavLink to="/career">
                Career
              </NavLink>
            </Accordion.Item>

          </Accordion.Root>
        </nav>
      </div>
    </div>
  );
};

export default SmallScreenMenu;
