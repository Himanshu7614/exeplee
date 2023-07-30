"use client";
import Button from "./comman/Button";
import Image from "next/image";

import { H1,H2, H3, H4 } from "./comman/Heading";
import { useState } from "react";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="container-fluid bgblur  shadow-md bg-[#ffffffc3] w-full fixed top-0 left-0 py-3 z-50">
        <div className="container relative  mx-auto ">
          <div className="flex flex-row mx-auto px-5 justify-between items-center bg-bgGrey  text-textWhite">
            <div className="font-bold">
              <Image
                  src="https://www.expelee.com/static/logo.svg"
                  className="lg:ml-16"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
            </div>
            <div className="sm:flex flex-row justify-between items-center gap-10 hidden ">
              <div className="font-semibold flex gap-1 items-center cursor-pointer duration-300">
                Home
              </div>
              <div className="font-semibold flex gap-1 items-center  group/Home">
                
                <p className="group-hover/Home:font-bold cursor-pointer duration-300" > Services</p>
                {/* dropdown */}
                <div className="absolute top-[65%] hh  py-5 left-0 w-screen bg-transperent invisible group-hover/Home:visible duration-300 ">
                  <div className="w-full bg-[#eef9fbfe] blurBg2   ">
                    <div className="  px-24 py-8">
                      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center my-5">
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                              <H3 heading="Our services" />
                              <p className="text-sm">
                                Unlocking possibilities and exceeding
                                expectations through our comprehensive range of
                                exceptional services.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                              <H3 heading="Services" />
                              <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee Audits
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee Audits (KYC)
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee NFT
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee Marketing
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                              <H3 heading="Expelee" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* dropdown */}
              </div>
              <div className="font-semibold flex gap-1 items-center   group/Home">
              <p className="group-hover/Home:font-bold cursor-pointer duration-300" > Solutions </p>

                <div className="absolute top-[73%] py-4 left-0 w-screen bg-transperent invisible group-hover/Home:visible duration-300">
                  <div className="w-full   bg-[#eef9fbfe] backdrop-blur bg-blur">
                    <div className="container mx-24 py-8">
                      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center my-5">
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                              <H3 heading="Our solutions" />
                              <p className="text-sm">
                                Unlock the potential of blockchain technology
                                with our innovative solutions, leading the way
                                towards a decentralized future.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>

                              <H3 heading="Products" />
                              <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee Audits
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee Audits
                                  </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-semibold flex gap-1 items-center   group/Home">
                
                <p className="group-hover/Home:font-bold cursor-pointer duration-300" > Company</p>

                <div className="absolute top-[70%] py-4 left-0 w-screen bg-transperent invisible group-hover/Home:visible duration-300">
                  <div className="w-full   bg-[#eef9fbfe] backdrop-blur bg-blur">
                    <div className="container mx-24 py-8">
                      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center my-5">
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                              <H3 heading="About company" />
                              <p className="text-sm">
                                Gain deeper insights about the exceptional team
                                and individuals driving Expelees success and
                                revolutionizing the blockchain industry
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                              <H3 heading="Explore" />
                              <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee Audits
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee Audits (KYC)
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <a
                              href="#"
                              className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                            >
                              Expelee Audits (KYC)
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-semibold flex gap-1 items-center   group/Home">
                
                <p className="group-hover/Home:font-bold cursor-pointer duration-300" > Resouces</p>

                <div className="absolute top-[70%] py-4 left-0 w-screen bg-transperent invisible group-hover/Home:visible duration-300">
                  <div className="w-full   bg-[#eef9fbfe] backdrop-blur bg-blur duration-300">
                    <div className="container mx-24 py-8">
                      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center my-5">
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                              <H3 heading="Resource" />
                              <p className="text-sm">
                                Empower your blockchain journey with our
                                comprehensive suite of resources, including case
                                studies & insightful blogs
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <div>
                              <H3 heading="Explore" />
                              <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Case Study
                                  </a>
                                </li>

                                <li>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                                  >
                                    Expelee Marketing
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="grid-cols-2">
                          <div className="flex items-start gap-5">
                            <a
                              href="#"
                              className="text-gray-700 hover:text-blue-900 transition hover:opacity-75"
                            >
                              Expelee Marketing
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-semibold flex gap-1 cursor-pointer items-center">
                Contract
              </div>
            </div>
            <div className="hidden lg:block  lg:mr-16">
              <Button className="mx-auto" buttonname={"Get Started "} />
            </div>
            <div
              className="block lg:hidden relative "
              onClick={() => {
                setShowMenu(showMenu === true ? false : true);
              }}
            >
              <H2 className="text-blue-400 cursor-pointer" heading="X" />
            </div>
          </div>
        </div>
        <div
          className={`${
            showMenu ? "flex lg:hidden" : "hidden fixed top-[5%] lg:hidden duration-300"
          }`}
        >
          <div className="my-5 mx-5">
            <div className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-2 relative">
                <div className="flex gap-2 items-center group/Drops">
                  <p className="text-normal">Home</p>
                </div>
                <div className="hidden flex-col gap-1 bg-transperent  group-hover/Drops:flex ">
                  <p className="text-normal">Services</p>
                  <p className="text-normal">Services</p>
                  <p className="text-normal">Services</p>
                </div>
              </div>

            <div className="flex gap-4 items-center">
              <p className="text-normal">Services</p>

            </div>
            <div className="flex gap-4 items-center">
              <p className="text-normal">Solutions</p>

            </div>
            <div className="flex gap-4 items-center">
              <p className="text-normal">Company</p>

            </div>
            <div className="flex gap-4 items-center">
              <p className="text-normal">Resouces</p>

            </div>
            <div className="flex gap-4 items-center">
              <p className="text-normal">Contract</p>
            </div>
          </div>
          </div>

        </div>
      </div>
    </>
  );
}
export default Header;
