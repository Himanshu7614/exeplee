import Image from "next/image";
import Button from "./comman/Button";
import { H1, H2, H3 } from "./comman/Heading";
import {BsArrowRight} from "react-icons/Bs"

function Experiance() {
  return (
    <>
      <div className="container px-3 my-16 mx-auto ">
        <div className=" flex flex-col mx-auto text-center">
          <H3 className="font-extrabold" heading="100+ satisfied clients and counting - trust us, we’re just getting started." />
          <Button className="mx-auto my-4" buttonname={"Get Started"} />

        </div>
        <div className=" flex flex-row lg:w-[700px] lg:py-4 my-5 mx-auto justify-between text-center lg:px-10 gap-3 border rounded-lg bg-white px-4">
          <div>
            <H2 className="lg:font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-100" heading="10+" />
            <p>Products</p>
          </div>
          <div>
            <H2 className="lg:font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-100"  heading="5,000+" />
            <p>Members</p>
          </div>
          <div>
            <H2 className="lg:font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-100"  heading="10+" />
            <p>Partners</p>
          </div>
          <div>
            <H2 className="lg:font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-100"  heading="100+" />
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Experiance;
