import { H1, H2, H3, H4 } from "./comman/Heading";
import Image from "next/image";
import { Devlink } from "./comman/Button";
function Aboutwrapper() {
  return (
    <>
      <div className="container px-5 bg-transparent ">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 items-center">
          <div className="grid-cols-2 ">
            <Image
            className="bg-transparent "
              src="/image/about.png"
              width={550}
              height={550}
              alt="Picture of the author"
            />
          </div>
          <div className="grid-cols-2 ">
            <div className="flex flex-col gap-4">
              <H2 heading="ABOUT US" className="text-black font-bold" />
              <div className="flex flex-col gap-2">
                <H3
                  heading="What we provide ?"
                  className="text-black font-bold"
                />
                <p className="break-all">
                  We provide a wide range of blockchain services that cater to
                  the specific needs of businesses and individuals. Our
                  offerings include comprehensive solutions for Smart Contract
                  audits and decentralized applications. Our team of highly
                  experienced blockchain experts collaborates closely with you
                  to gain a deep understanding of your unique requirements. We
                  then deliver customized solutions that foster innovation and
                  drive growth.
                </p>
                <div className="flex gap-3 items-center">
           <Devlink />
            </div>

              </div>
              <div className="flex flex-col gap-2">
                <H3
                  heading="Expe dApp Creator"
                  className="text-black "
                />
                <p className="break-all">
                  We provide a wide range of blockchain services that cater to
                  the specific needs of businesses and individuals. Our
                  offerings include comprehensive solutions for Smart Contract
                  audits and decentralized applications. Our team of highly
                  experienced blockchain experts collaborates closely with you
                  to gain a deep understanding of your unique requirements. We
                  then deliver customized solutions that foster innovation and
                  drive growth.
                </p>
                <div className="flex gap-3 items-center">
           <Devlink />
            </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutwrapper;
