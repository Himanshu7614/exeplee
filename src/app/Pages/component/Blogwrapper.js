import Image from "next/image";
import { H1, H2, H3, H4} from "./comman/Heading";
import {BsArrowRight} from "react-icons/Bs"


function Blogwrapper() {
  return (
    <>
      <div className="container mx-auto my-16">
        <div className=" flex flex-col gap-3 mx-auto text-center py-4">
        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-50">
        OUR BLOGS
          </p>
          <H2 className="font-bold" heading="Learn more from us" />
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 GAP-4 items-center">
          <div className="grid-cols-1 mx-auto my-4">
            <div className="w-64">
              <div className=" bg-white shadow-2xl hover:pb-4 duration-300  rounded-lg ">
              <Image
                src="/image/blog-1.png"
                className="my-2 cardWrapper z-10"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="px-5 py-1">
                <p className="text-gray-600 text-xs"> 13/DEC</p>
                <a href="#">
                  <H4 className="text-lg font-bold" heading="Noteworthy technology acquisitions 2021"/>
                    
                </a>
                <p className="mb-3 font-normal">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <div className="flex gap-3 items-center my-3">
            <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 hover:pr-3 duration-300 ">Lets Start  </p>
            <BsArrowRight />
            </div>
              </div>
            </div>
            </div>
          </div>
          <div className="grid-cols-1 mx-auto my-4">
            
          <div className="w-64">
          <div className=" bg-white shadow-2xl hover:pb-4 duration-300  rounded-lg ">
              <Image
                src="/image/blog-2.png"
                className="my-2 cardWrapper"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="px-5 py-1">
               <p className="text-gray-600 text-xs"> 13/DEC</p>
                <a href="#">
                  <H4 heading="Noteworthy technology acquisitions 2021"/>
                    
                </a>
                <p className="mb-3 font-normal">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <div className="flex gap-3 items-center my-3">
            <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 hover:pr-3 duration-300 ">Lets Start  </p>
            <BsArrowRight />
            </div>
              </div>
            </div>
          </div>
          </div>
          <div className="grid-cols-1 mx-auto my-4">
            
          <div className="w-64">
          <div className=" bg-white shadow-2xl hover:mb-4 duration-300  rounded-lg ">

              <Image
                src="/image/blog-3.png"
                className="my-2 cardWrapper"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="px-5 py-1">
               <p className="text-gray-600 text-xs"> 13/DEC</p>
                <a href="#">
                  <H4 heading="Noteworthy technology acquisitions 2021"/>
                    
                </a>
                <p className="mb-3 font-normal">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <div className="flex gap-3 items-center my-3">
            <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 hover:pr-3 duration-300 ">Lets Start  </p>
            <BsArrowRight />
            </div>
              </div>
            </div>
            </div>
            </div>
            <div className="grid-cols-1 mx-auto my-4 ">
            <div className="w-64">
            <div className=" bg-white shadow-2xl hover:pb-4 duration-300  rounded-lg ">

              <Image
                src="/image/blog-4.png"
                className="my-2 cardWrapper"
                width={500}
                height={500}
                alt="Picture of the author"
              />
              <div className="px-5 py-1">
               <p className="text-gray-600 text-xs"> 13/DEC</p>
                <a href="#">
                  <H4 heading="Noteworthy technology acquisitions 2021"/>
                    
                </a>
                <p className="mb-3 font-normal">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <div className="flex gap-3 items-center my-3">
            <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300 hover:pr-3 duration-300 ">Lets Start  </p>
            <BsArrowRight />
            </div>
              </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Blogwrapper;
