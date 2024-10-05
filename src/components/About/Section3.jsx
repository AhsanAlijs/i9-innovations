import React from "react";
import SectionWrapper from "../SectionWrapper";
import MainImg from "../../assets/about/section3/main-img.png";
import { RiArrowRightDownLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const Icon1 = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0297 4.67899C11.9028 4.20788 9.68116 4.42412 7.68498 5.29656C5.6888 6.16901 4.02111 7.65261 2.92217 9.53363C2.87092 9.62139 2.85016 9.72365 2.86315 9.82445C2.87613 9.92525 2.92212 10.0189 2.99395 10.0908L5.98467 13.0815C8.10442 9.79206 10.8354 6.93968 14.0297 4.67899V4.67899Z"
        fill="#A3DC2F"
      />
      <path
        d="M25.3889 16.0391C25.86 18.166 25.6438 20.3876 24.7713 22.3838C23.8989 24.38 22.4153 26.0477 20.5342 27.1466C20.4465 27.1979 20.3442 27.2186 20.2434 27.2056C20.1426 27.1926 20.049 27.1467 19.9771 27.0748L16.9863 24.0841C20.2758 21.9644 23.1282 19.2333 25.3889 16.0391V16.0391Z"
        fill="#A3DC2F"
      />
      <path
        d="M7.65155 22.4183C7.04699 21.8152 6.22792 21.4766 5.374 21.4766C4.52007 21.4766 3.701 21.8152 3.09645 22.4183C1.61351 23.9008 1.2491 28.1587 1.233 28.339C1.22777 28.4025 1.2358 28.4665 1.25657 28.5267C1.27734 28.587 1.3104 28.6422 1.35366 28.689C1.39691 28.7358 1.44942 28.7732 1.50786 28.7986C1.56629 28.824 1.62937 28.8371 1.69311 28.8369C1.70553 28.8369 1.71841 28.8369 1.73084 28.8369C1.9112 28.8221 6.16907 28.4577 7.65155 26.9748C8.25504 26.3702 8.59398 25.5508 8.59398 24.6966C8.59398 23.8423 8.25504 23.0229 7.65155 22.4183V22.4183Z"
        fill="#0065C0"
      />
      <path
        d="M26.5472 11.1675C27.8942 8.18732 28.6718 4.98149 28.8399 1.71539C28.8436 1.65089 28.8337 1.58633 28.8108 1.52593C28.7879 1.46552 28.7525 1.41061 28.7069 1.36478C28.6611 1.31893 28.6062 1.28316 28.5458 1.25978C28.4853 1.23641 28.4206 1.22594 28.3559 1.22905C25.0804 1.38141 21.863 2.14971 18.8721 3.49372L26.5472 11.1675Z"
        fill="#0065C0"
      />
      <path
        d="M17.994 3.91797C8.91597 8.46157 5.32526 17.1011 5.27925 17.2152C5.24564 17.2989 5.23736 17.3906 5.25543 17.4789C5.27351 17.5673 5.31715 17.6483 5.38093 17.7121L12.3571 24.6888C12.4212 24.7529 12.5028 24.7967 12.5918 24.8147C12.6807 24.8326 12.7729 24.8238 12.8568 24.7895C12.9705 24.7435 21.5681 21.1109 26.1223 12.0445L17.994 3.91797ZM16.4167 16.4137C15.8707 16.4137 15.3369 16.2518 14.883 15.9484C14.429 15.6451 14.0751 15.2139 13.8662 14.7095C13.6572 14.205 13.6026 13.6499 13.7091 13.1144C13.8156 12.5789 14.0785 12.087 14.4646 11.7009C14.8507 11.3148 15.3426 11.0519 15.8781 10.9454C16.4136 10.8389 16.9687 10.8935 17.4732 11.1025C17.9776 11.3114 18.4088 11.6653 18.7121 12.1193C19.0155 12.5732 19.1774 13.107 19.1774 13.653C19.1774 14.3852 18.8865 15.0874 18.3688 15.6051C17.8511 16.1228 17.1489 16.4137 16.4167 16.4137Z"
        fill="#0065C0"
      />
    </svg>
  );
};

const Icon2 = () => {
  return (
    <svg
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.9346 10.4307V5.82955C29.9346 5.06715 29.3167 4.44922 28.5543 4.44922H2.78805C2.02564 4.44922 1.40771 5.06715 1.40771 5.82955V10.4307H29.9346Z"
        fill="#A3DC2F"
      />
      <path
        d="M1.40771 14.5723V24.2346C1.40771 24.997 2.02564 25.6149 2.78805 25.6149H28.5543C29.3167 25.6149 29.9346 24.997 29.9346 24.2346V14.5723H1.40771ZM11.9903 21.0138H5.54871C5.29473 21.0138 5.0886 20.8077 5.0886 20.5537C5.0886 20.2997 5.29473 20.0936 5.54871 20.0936H11.9903C12.2443 20.0936 12.4504 20.2997 12.4504 20.5537C12.4504 20.8077 12.2443 21.0138 11.9903 21.0138ZM25.7936 21.0138H23.9532C23.6992 21.0138 23.493 20.8077 23.493 20.5537C23.493 20.2997 23.6992 20.0936 23.9532 20.0936H25.7936C26.0476 20.0936 26.2537 20.2997 26.2537 20.5537C26.2537 20.8077 26.0476 21.0138 25.7936 21.0138Z"
        fill="#0065C0"
      />
    </svg>
  );
};

const Icon3 = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5765 10.6128L1.69336 6.01172V23.172C1.69336 23.3666 1.81575 23.5401 1.99887 23.605L14.5765 28.0971V10.6128Z"
        fill="#A3DC2F"
      />
      <path
        d="M15.0359 9.80046L27.9038 5.20487L15.162 1.56447C15.0791 1.54101 14.9922 1.54101 14.9094 1.56447L2.16797 5.20487L15.0359 9.80046Z"
        fill="#0065C0"
      />
      <path
        d="M15.4971 10.6128V28.0971L28.0747 23.605C28.2578 23.5401 28.3802 23.3666 28.3802 23.172V6.01172L15.4971 10.6128Z"
        fill="#A3DC2F"
      />
    </svg>
  );
};

const Icon4 = () => {
  return (
    <svg
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.9196 0.167969H16.6209C16.3583 0.167969 16.146 0.40302 16.146 0.69381V14.3657C16.146 14.5681 16.251 14.7517 16.4148 14.8395C16.4808 14.8747 16.5511 14.8915 16.6209 14.8915C16.7269 14.8915 16.8318 14.8526 16.9178 14.7764L21.5372 10.6848H29.9196C30.1823 10.6848 30.3946 10.4497 30.3946 10.159V0.69381C30.3946 0.40302 30.1823 0.167969 29.9196 0.167969Z"
        fill="#A3DC2F"
      />
      <path
        d="M9.02116 18.0472C11.3819 18.0472 13.2957 15.9283 13.2957 13.3146C13.2957 10.7009 11.3819 8.58203 9.02116 8.58203C6.66038 8.58203 4.74658 10.7009 4.74658 13.3146C4.74658 15.9283 6.66038 18.0472 9.02116 18.0472Z"
        fill="#0065C0"
      />
      <path
        d="M15.0011 21.2831C13.7919 20.7662 11.7729 20.1504 9.02147 20.1504C6.27007 20.1504 4.25104 20.7662 3.04181 21.2831C1.78888 21.8184 0.947266 23.1934 0.947266 24.7052V29.0897C0.947266 29.3805 1.15957 29.6155 1.42222 29.6155H16.6207C16.8834 29.6155 17.0957 29.3805 17.0957 29.0897V24.7052C17.0957 23.1934 16.2541 21.8184 15.0011 21.2831Z"
        fill="#0065C0"
      />
    </svg>
  );
};

const cards = [
  {
    img: <Icon1 />,
    title: "24x7 Support",
    paragraph:
      "Extremely qualified support team committed to solving any query 24x7.",
  },
  {
    img: <Icon2 />,
    title: "Hight Quality Assurance",
    paragraph:
      "One of our values is to provide the highest possible solutions.",
  },
  {
    img: <Icon3 />,
    title: "Timely Delivery",
    paragraph:
      "Given our existing customer base one can vouch us for our values & services.",
  },
  {
    img: <Icon4 />,
    title: "Dedicated Teams",
    paragraph: "A team dedicated to provide high quality services. ",
  },
];

const Section3 = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 justify-items-center">
        <div className="">
          <img alt="" className="w-[270px] lg:w-[470px]" src={MainImg} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">We Create Result-Oriented</h3>
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">
            DYNAMIC <span className="text-[#8ABC3E]"> APPLICATIONS </span>
          </h2>
          <p className="my-5">
            We are driven by values & powered by an exceptionally skilled team.
            Our continuous improvement process helps us deliver high-quality
            results. We believe in the power of technology to propel your
            business and achieve success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {cards?.map((item, index) => {
              return (
                <div className="flex flex-col gap-2" key={index}>
                  <div className="mb-2">
                    {item.img}
                  </div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-[14px]">{item.paragraph}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-row items-center gap-5 mt-12">
            <a href="tel:+917304073040" className="flex flex-row items-center gap-4 px-4 py-2 bg-[#0065C0] rounded-full text-white hover:shadow-lg hover:bg-[#1a74c6] transition-all text-sm">
              <span>Call Now</span>
              <RiArrowRightDownLine />
            </a>

            <Link to="/appointment/1" className="flex flex-row items-center gap-4 px-4 py-2 bg-[#8ABC3E] rounded-full text-white hover:shadow-lg hover:bg-[#76a134] transition-all text-sm">
              <span>Free Demo</span>
              <RiArrowRightDownLine />
            </Link>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Section3;
