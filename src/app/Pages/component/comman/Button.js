function Button({buttonname, clickMe = null, className=null}) {
    return (
      <>
        <button className={`px-4 py-1.5 rounded-full flex items-center w-auto bg-gradient-to-l from-blue-200 via-blue-400 to-blue-700 text-white text-center font-bold hover:px-8 duration-300 ${className}`} onClick={clickMe}> 
          {buttonname};
        </button>
        
      </>
    );
  }
  
  
  
  export default Button;
  
  export function Devlink(){
    return(
      <>
       <div className="flex gap-3 items-center">
            <p className="font-semibold bg-gradient-to-r from-blue-900 to-cyan-300 bg-clip-text text-transparent hover:pr-3 duration-300 ">Lets Start  </p>
            <span className="text-xl font-bold"></span>
            </div>
      </>
    )
  }
  
  export function Navlink(){
    return(
      <>
       <div className="flex gap-3 items-center">
            <p className="font-semibold bg-gradient-to-r from-blue-900 to-cyan-300 bg-clip-text text-transparent hover:pr-3 duration-300 ">Lets Start  </p>
            <span className="text-xl font-bold"></span>
            </div>
      </>
    )
  }
  


  export function SimpleButton({buttonname, clickMe = null, className}) {
    return (
      <>
        <button className={`${className}`} onClick={clickMe}> 
          {buttonname}
        </button>
      </>
    );
  }