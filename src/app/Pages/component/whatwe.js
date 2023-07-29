import Image from "next/image";
import {H1 ,H2, H3} from "./comman/Heading"

function Whatwe() {
  return (
    <>
      <div className="container px-5 my-16">
        
      <div className=" flex flex-col ga-3 mx-auto text-center">
      <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-50">
      WHO ARE WE
          </p>
          <H2 className="font-bold" heading="What makes us different ?" />
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center my-5">
          <div className="grid-cols-2">
            <div className="flex items-start gap-5">
            <Image src="/image/transparency.svg" className="my-2" width={50}   height={50} alt="Picture of the author" />
            <div>
            <H3 heading="Transparency"/>
            <p>At Expelee, we prioritize customer transparency. We believe in open communication, providing detailed updates, and involving clients throughout the blockchain development process. Trust and clarity are at the core of our customer-centric approach.</p>
            </div>
            </div>
          </div>
         <div className="grid-cols-2">
            <div className="flex items-start gap-5">
            <Image src="/image/proactive.svg" className="my-2" width={50}   height={50} alt="Picture of the author" />
            <div>
            <H3 heading="Proactive"/>
            <p>At Expelee, we pride ourselves on being proactive in the blockchain development industry. We stay ahead of trends, anticipate challenges, and proactively offer innovative solutions to help our clients navigate and excel in the rapidly evolving blockchain landscape.</p>
            </div>
            </div>
          </div>
         <div className="grid-cols-2">
            <div className="flex items-start gap-5">
            <Image src="/image/affordable.svg" className="my-2" width={50}   height={50} alt="Picture of the author" />
            <div>
            <H3 heading="Affordable"/>
            <p>Expelee offers affordable blockchain development services without compromising on quality. We believe in making advanced technology accessible to all, providing cost-effective solutions tailored to your needs, ensuring exceptional value for your investment.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whatwe;
