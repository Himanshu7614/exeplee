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


// import './styles.css';

// import required modules
import { Autoplay ,FreeMode, Pagination } from "swiper/modules";

function Clientslider() {
  return (
    <>
      <div className="container mx-auto my-4">
        <Swiper
          breakpoints={{
            640: { slidesPerView: 2},
            420:    { slidesPerView: 1}
          }}
          autoplay={{
            delay: 2500,
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
            <div className="my-16">
              <div className=" bg-transperant p-8 ">
                <div className=" flex items-start gap-3">
                    <div className="my-1">
                        <Image className="drop-shadow-lg"  src="/image/John.jpg" width={250}  height={350}  alt="Picture of the author"/>
                    </div>
                    <div className="flex flex-col w-80 gap-3">
                        <Image src="/image/icon-testimonials.svg" width={32}  height={32}  alt="Picture of the author"/>
                        <p className="text-sm">
                        Expelees DApp creation service brought our gaming concept to life. Their transparent communication, affordable pricing, and proactive problem-solving made them the ideal partner for our blockchain-based game development.
                        </p>
                        <H4 heading="— Emily Thompson, Marketing Manager at ArtCollect"/>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="my-16">
              <div className=" bg-transperant p-8  ">
                <div className=" flex items-start gap-3">
                    <div className="my-1">
                        <Image className="shadow-lg"  src="/image/David.jpg" width={250}  height={350}  alt="Picture of the author"/>
                    </div>
                    <div className="flex flex-col w-80 gap-3">
                        <Image src="/image/icon-testimonials.svg" width={32}  height={32}  alt="Picture of the author"/>
                        <p className="text-sm">
                      Expelees DApp creation service brought our gaming concept to life. Their transparent communication, affordable pricing, and proactive problem-solving made them the ideal partner for our blockchain-based game development.
                        </p>
                        <H4 heading="— Emily Thompson, Marketing Manager at ArtCollect"/>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
           <div className="my-16">
              <div className=" bg-transperant p-8  ">
                <div className=" flex items-start gap-3">
                    <div className="my-1">
                        <Image className="shadow-lg"  src="/image/Emily.jpg" width={250}  height={350}  alt="Picture of the author"/>
                    </div>
                    <div className="flex flex-col w-80 gap-3">
                        <Image src="/image/icon-testimonials.svg" width={32}  height={32}  alt="Picture of the author"/>
                        <p className="text-sm">
                        Expelees DApp creation service brought our gaming concept to life. Their transparent communication, affordable pricing, and proactive problem-solving made them the ideal partner for our blockchain-based game development.
                        </p>
                        <H4 heading="— Emily Thompson, Marketing Manager at ArtCollect"/>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
           <div className="my-16">
              <div className=" bg-transperant p-8  ">
                <div className=" flex items-start gap-3">
                    <div className="my-1">
                        <Image className="shadow-lg"  src="/image/John.jpg" width={250}  height={350}  alt="Picture of the author"/>
                    </div>
                    <div className="flex flex-col w-80 gap-3">
                        <Image src="/image/icon-testimonials.svg" width={32}  height={32}  alt="Picture of the author"/>
                        <p className="text-sm">
                        Expelees DApp creation service brought our gaming concept to life. Their transparent communication, affordable pricing, and proactive problem-solving made them the ideal partner for our blockchain-based game development.
                        </p>
                        <H4 heading="— Emily Thompson, Marketing Manager at ArtCollect"/>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
           <div className="my-16">
              <div className=" bg-transperant p-8  ">
                <div className=" flex items-start gap-3">
                    <div className="my-1">
                        <Image className="shadow-lg"  src="/image/jeneffer.jpg" width={250}  height={350}  alt="Picture of the author"/>
                    </div>
                    <div className="flex flex-col w-80 gap-3">
                        <Image src="/image/icon-testimonials.svg" width={32}  height={32}  alt="Picture of the author"/>
                        <p className="text-sm">
                        Expelees DApp creation service brought our gaming concept to life. Their transparent communication, affordable pricing, and proactive problem-solving made them the ideal partner for our blockchain-based game development.
                        </p>
                        <H4 heading="— Emily Thompson, Marketing Manager at ArtCollect"/>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
           <div className="my-16">
              <div className=" bg-transperant p-8  ">
                <div className=" flex items-start gap-3">
                    <div className="my-1">
                        <Image className="shadow-lg"  src="/image/John.jpg" width={250}  height={350}  alt="Picture of the author"/>
                    </div>
                    <div className="flex flex-col w-80 gap-3">
                        <Image src="/image/icon-testimonials.svg" width={32}  height={32}  alt="Picture of the author"/>
                        <p className="text-sm">
                        Expelees DApp creation service brought our gaming concept to life. Their transparent communication, affordable pricing, and proactive problem-solving made them the ideal partner for our blockchain-based game development.
                        </p>
                        <H4 heading="— Emily Thompson, Marketing Manager at ArtCollect"/>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
           <div className="my-16">
              <div className=" bg-transperant p-8  ">
                <div className=" flex items-start gap-3">
                    <div className="my-1">
                        <Image className="shadow-lg"  src="/image/John.jpg" width={250}  height={350}  alt="Picture of the author"/>
                    </div>
                    <div className="flex flex-col w-80 gap-3">
                        <Image src="/image/icon-testimonials.svg" width={32}  height={32}  alt="Picture of the author"/>
                        <p className="text-sm">
                        Expelees DApp creation service brought our gaming concept to life. Their transparent communication, affordable pricing, and proactive problem-solving made them the ideal partner for our blockchain-based game development.
                        </p>
                        <H4 heading="— Emily Thompson, Marketing Manager at ArtCollect"/>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
           <div className="my-16">
              <div className=" bg-transperant p-8  ">
                <div className=" flex items-start gap-3">
                    <div className="my-1">
                        <Image className="shadow-lg"  src="/image/John.jpg" width={250}  height={350}  alt="Picture of the author"/>
                    </div>
                    <div className="flex flex-col w-80 gap-3">
                        <Image src="/image/icon-testimonials.svg" width={32}  height={32}  alt="Picture of the author"/>
                        <p className="text-sm">
                        Expelees DApp creation service brought our gaming concept to life. Their transparent communication, affordable pricing, and proactive problem-solving made them the ideal partner for our blockchain-based game development.
                        </p>
                        <H4 heading="— Emily Thompson, Marketing Manager at ArtCollect"/>
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
           <div className="my-16">
              <div className=" bg-transperant p-8  ">
                <div className=" flex items-start gap-3">
                    <div className="my-1">
                        <Image className="shadow-lg"  src="/image/John.jpg" width={250}  height={350}  alt="Picture of the author"/>
                    </div>
                    <div className="flex flex-col w-80 gap-3">
                        <Image src="/image/icon-testimonials.svg" width={32}  height={32}  alt="Picture of the author"/>
                        <p className="text-sm">
                        Expelees DApp creation service brought our gaming concept to life. Their transparent communication, affordable pricing, and proactive problem-solving made them the ideal partner for our blockchain-based game development.
                        </p>
                        <H4 heading="— Emily Thompson, Marketing Manager at ArtCollect"/>
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

export default Clientslider;
