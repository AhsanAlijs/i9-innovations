import React from "react";
import Container from "./Container";
import bgBottomImage from "../assets/header-bg-bottom.png";
import Navbar from "./Navbar";

const Header = ({ title, paragraph }) => {
  return (
    <section className="_header_component relative">
      <Navbar />
      <Container>
        <div className="flex flex-col w-10/12 lg:w-8/12 xl:w-10/12 mx-auto text-center items-center justify-center min-h-[100vh] sm:min-h-[80vh] md:min-h-[90vh] lg:min-h-[100vh] w-100 gap-8 text-[#0065C0]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
            {title}
          </h1>
          {paragraph && (
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium">
              {paragraph}
            </h2>
          )}
        </div>
      </Container>
      <div className="absolute w-full h-20 bottom-0 left-0">
        <img alt="" className="w-full" src={bgBottomImage} />
      </div>
    </section>
  );
};

export default Header;
