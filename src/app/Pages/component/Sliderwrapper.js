"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import { H1, H2, H3, H4} from "./comman/Heading";
import {BsArrowRight} from "react-icons/Bs"


// import './styles.css';

// import required modules
import { Autoplay ,FreeMode, Pagination } from "swiper/modules";

function Sliderwrapper() {
  return (
    <>
      <div className="container  my-4">
        <Swiper
          breakpoints={{
            740: { slidesPerView: 3},
            420:    { slidesPerView: 1}
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[ Autoplay,FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div className="lg:w-80 w-64 my-16 mx-4 border rounded-lg">
              <div className=" bg-white shadow-2xl   duration-300  rounded-lg ">
                <div className="lg:p-5 p-4">
                    <div className="flex items-center gap-3 my-4">
                    <Image
                  src="/image/appCreator.svg"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                    <H4 heading="comprehensive" />
                  </div>
                  <p className="mb-3 break-all">
                  Leverage our expertise in creating secure DApps on reliable blockchain technology. Whether it`s a decentralized marketplace or a financial product, we can bring your ideas to life. Contact us today to learn more.
                  </p>
                  <div className="flex gap-3 items-center my-3">
                    <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 duration-300 ">
                      Lets Start{" "}
                    </p>
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
         <div className="lg:w-80 w-64 my-16 mx-8 border rounded">
              <div className=" bg-white shadow-2xl   duration-300  rounded-lg ">
                <div className="lg:p-5 p-4">
                    <div className="flex items-center gap-3 my-4">
                    <Image
                  src="/image/appCreator.svg"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                    <H4 heading="comprehensive" />
                  </div>
                  <p className="mb-3 break-all">
                  Leverage our expertise in creating secure DApps on reliable blockchain technology. Whether it`s a decentralized marketplace or a financial product, we can bring your ideas to life. Contact us today to learn more.
                  </p>
                  <div className="flex gap-3 items-center my-3">
                    <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 duration-300 ">
                      Lets Start{" "}
                    </p>
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
         <div className="lg:w-80 w-64 my-16 mx-8 border rounded">
              <div className=" bg-white shadow-2xl   duration-300  rounded-lg ">
                <div className="lg:p-5 p-4">
                    <div className="flex items-center gap-3 my-4">
                    <Image
                  src="/image/appCreator.svg"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                    <H4 heading="comprehensive" />
                  </div>
                  <p className="mb-3 break-all">
                  Leverage our expertise in creating secure DApps on reliable blockchain technology. Whether it`s a decentralized marketplace or a financial product, we can bring your ideas to life. Contact us today to learn more.
                  </p>
                  <div className="flex gap-3 items-center my-3">
                    <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 duration-300 ">
                      Lets Start{" "}
                    </p>
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
         <div className="lg:w-80 w-64 my-16 mx-8 border rounded">
              <div className=" bg-white shadow-2xl   duration-300  rounded-lg ">
                <div className="lg:p-5 p-4">
                    <div className="flex items-center gap-3 my-4">
                    <Image
                  src="/image/appCreator.svg"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                    <H4 heading="comprehensive" />
                  </div>
                  <p className="mb-3 break-all">
                  Leverage our expertise in creating secure DApps on reliable blockchain technology. Whether it`s a decentralized marketplace or a financial product, we can bring your ideas to life. Contact us today to learn more.
                  </p>
                  <div className="flex gap-3 items-center my-3">
                    <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 duration-300 ">
                      Lets Start{" "}
                    </p>
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
         <div className="lg:w-80 w-64 my-16 mx-8 border rounded">
              <div className=" bg-white shadow-2xl   duration-300  rounded-lg ">
                <div className="lg:p-5 p-4">
                    <div className="flex items-center gap-3 my-4">
                    <Image
                  src="/image/appCreator.svg"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                    <H4 heading="comprehensive" />
                  </div>
                  <p className="mb-3 break-all">
                  Leverage our expertise in creating secure DApps on reliable blockchain technology. Whether it`s a decentralized marketplace or a financial product, we can bring your ideas to life. Contact us today to learn more.
                  </p>
                  <div className="flex gap-3 items-center my-3">
                    <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 duration-300 ">
                      Lets Start{" "}
                    </p>
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
         <div className="lg:w-80 w-64 my-16 border mx-8 rounded">
              <div className=" bg-white shadow-2xl   duration-300  rounded-lg ">
                <div className="lg:p-5 p-4">
                    <div className="flex items-center gap-3 my-4">
                    <Image
                  src="/image/appCreator.svg"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                    <H4 heading="comprehensive" />
                  </div>
                  <p className="mb-3 break-all">
                  Leverage our expertise in creating secure DApps on reliable blockchain technology. Whether it`s a decentralized marketplace or a financial product, we can bring your ideas to life. Contact us today to learn more.
                  </p>
                  <div className="flex gap-3 items-center my-3">
                    <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 duration-300 ">
                      Lets Start{" "}
                    </p>
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
         <div className="lg:w-80 w-64 my-16 border mx-8 rounded">
              <div className=" bg-white shadow-2xl   duration-300  rounded-lg ">
                <div className="lg:p-5 p-4">
                    <div className="flex items-center gap-3 my-4">
                    <Image
                  src="/image/appCreator.svg"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                    <H4 heading="comprehensive" />
                  </div>
                  <p className="mb-3 break-all">
                  Leverage our expertise in creating secure DApps on reliable blockchain technology. Whether it`s a decentralized marketplace or a financial product, we can bring your ideas to life. Contact us today to learn more.
                  </p>
                  <div className="flex gap-3 items-center my-3">
                    <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 duration-300 ">
                      Lets Start{" "}
                    </p>
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
         <div className="lg:w-80 w-64 my-16 border mx-8 rounded">
              <div className=" bg-white shadow-2xl   duration-300  rounded-lg ">
                <div className="lg:p-5 p-4">
                    <div className="flex items-center gap-3 my-4">
                    <Image
                  src="/image/appCreator.svg"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                    <H4 heading="comprehensive" />
                  </div>
                  <p className="mb-3 break-all">
                  Leverage our expertise in creating secure DApps on reliable blockchain technology. Whether it`s a decentralized marketplace or a financial product, we can bring your ideas to life. Contact us today to learn more.
                  </p>
                  <div className="flex gap-3 items-center my-3">
                    <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 duration-300 ">
                      Lets Start{" "}
                    </p>
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
         <div className="lg:w-80 w-64 my-16 border mx-8 rounded">
              <div className=" bg-white shadow-2xl   duration-300  rounded-lg ">
                <div className="lg:p-5 p-4">
                    <div className="flex items-center gap-3 my-4">
                    <Image
                  src="/image/appCreator.svg"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                    <H4 heading="comprehensive" />
                  </div>
                  <p className="mb-3 break-all">
                  Leverage our expertise in creating secure DApps on reliable blockchain technology. Whether it`s a decentralized marketplace or a financial product, we can bring your ideas to life. Contact us today to learn more.
                  </p>
                  <div className="flex gap-3 items-center my-3">
                    <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 duration-300 ">
                      Lets Start{" "}
                    </p>
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Sliderwrapper;
