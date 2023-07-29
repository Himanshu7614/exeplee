import {BsArrowRight} from "react-icons/Bs"

function Button({buttonname, clickMe = null, className=null}) {
    return (
      <>
        <button className={`px-4 py-1.5 rounded-full flex items-center w-auto bg-gradient-to-br from-blue-400 to-blue-100 duration-500 hover:px-8 font-semibold ${className}`} onClick={clickMe}> 
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