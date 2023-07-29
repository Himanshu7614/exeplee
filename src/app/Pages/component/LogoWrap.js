import Image from "next/image";
import { H1, H2, H3 } from "./comman/Heading";

function LogoWrap() {
  return (
    <>
      <div className="container mx-auto my-10">
        <div className="flex gap-8 py-1.5 justify-start md:justify-between overflow-x-auto         whitespace-nowrap">
          <Image
            src="/image/pinksale.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <Image
            src="/image/pinksale.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <Image
            src="/image/pinksale.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <Image
            src="/image/pinksale.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <Image
            src="/image/pinksale.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
      </div>
      {/* <div className="container mx-auto my-10">
        <div className="flex flex-row gap-2 justify-center">
          
          <Image
            src="/image/pinksale.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <Image
            src="/image/pinksale.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <Image
            src="/image/pinksale.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <Image
            src="/image/pinksale.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
      </div> */}
    </>
  );
}

export default LogoWrap;
