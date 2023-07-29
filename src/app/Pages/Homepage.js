import Header from './component/Header'
import Headingtextwrapper from "./component/Headingtextwrapper"
import LogoWrap from "./component/LogoWrap"
import Aboutwrapper from "./component/Aboutwrapper"
import Whatwe from "./component/whatwe"
import Projects from "./component/Projects"
import Blogwrapper from "./component/Blogwrapper"
import Experiance from "./component/Experiance"
import Footer from "./component/Footer"
import Sliderwrapper from "./component/Sliderwrapper"
import Clientslider from "./component/Clientslider"


function Homepage(){
    return(
        <>
        <div className='back'>
            <Header />
            <div className='lg:px-16 sm:px-5'>
            <Headingtextwrapper />
            <Sliderwrapper />
            <LogoWrap />
            <Aboutwrapper />
            <Whatwe />
            <Projects />
            <Clientslider />
            <Blogwrapper />
            <Experiance />
            <Footer/>
            </div>
        </div>
        </>
    )
}

export default Homepage;