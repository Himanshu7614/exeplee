import Image from "next/image";
import { H1, H2, H3 } from "./comman/Heading";
import { Devlink } from "./comman/Button";

function Products() {
  return (
    <>
      <div className="container mx-auto">
        <div className=" flex flex-col ga-3 mx-auto text-center">
          <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-50">
            TESTIMONIALS
          </p>
          <H2 className="font-bold" heading="What others are saying" />
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
          <div className="grid-cols-2 mx-auto">
            <Image
              src="/image/1.webp"
              width={450}
              height={450}
              alt="Picture of the author"
            />
          </div>
          <div className="grid-cols-2 my-4">
            <div className="flex flex-col gap-4 px-16">
              <div className="flex flex-col gap-1">
                <Image
                  src="/image/logo.png"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <H2
                  heading="The 8BitEARN dApp built by Expelee"
                  className="text-black font-bold"
                />
                <p className="break-all lg:text-lg">
                  Introducing our custom dApp for 8BitEARN, offering a suite of
                  features including Staking, DAO, and Credit facilities. We
                  meticulously designed and developed this advanced dApp,
                  prioritizing security and user-friendly functionality.
                </p>
                <div className="flex gap-3 items-center">
           < Devlink />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
          <div className="grid-cols-2 my-4">
            <div className="flex flex-col gap-4 px-16">
              <div className="flex flex-col gap-2">
                <Image
                  src="/image/logo (1).png"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <H2 heading="Defi Forge" className="text-black font-bold" />
                <p className="break-all lg:text-lg">
                  Introducing our revolutionary DApp for Defi Forge, aimed at
                  transforming the DeFi landscape with enhanced utilities for a
                  safer and user-friendly experience. Our team seamlessly
                  integrated two innovative DApps with their website, amplifying
                  their platform's capabilities.
                </p>
                <div className="flex gap-3 items-center">
           < Devlink />
                </div>
              </div>
            </div>
          </div>

          <div className="grid-cols-2 mx-auto">
            <Image
              src="/image/2.webp"
              width={450}
              height={450}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
