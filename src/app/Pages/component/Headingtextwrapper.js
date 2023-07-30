import {H1 , H3} from "./comman/Heading"
import {Button, Devlink} from "./comman/Button";

function Headingtextwrapper(){
    return(
        <>

        <div className="container bg-transparent  pt-32">
            <div className="w-lg-[60%] mx-auto text-center flex flex-col gap-5">
                <div>
            <H1 className="font-extrabold " heading="Empowering Technology "/> <br />
            <H1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-300" heading="Solutions for a Seamless Future" />
            </div>
            <H3 className="lg:w-[650px] mx-auto" heading="On the way to build numerous products that will empower IT Industry in upcoming years"/>
            <div className="flex gap-3 mx-auto items-center">
            <Devlink />
            </div>
           
            </div>
        </div>
        </>
    )
}

export default Headingtextwrapper;