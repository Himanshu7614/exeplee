import {BsArrowRight} from "react-icons/Bs"

function Button({buttonname, clickMe = null, className=null}) {
    return (
      <>
        <button className={`px-4 py-1.5 rounded-full flex items-center w-auto backbutton duration-500 hover:px-8 font-semibold text-white text-center ${className}`} onClick={clickMe}> 
          {buttonname} <BsArrowRight className="px-2" />
        </button>
        
      </>
    );
  }
  
  
  
  export default Button;
  
  
  
  export function SimpleButton({buttonname, clickMe = null, className}) {
    return (
      <>
        <button className={`${className}`} onClick={clickMe}> 
          {buttonname}
        </button>
      </>
    );
  }