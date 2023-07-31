function Nav(){
    return(
        <div className=" flex justify-between items-center capitalize fixed  top-0 w-[100%] bg-white z-40 ">
          <div className="">
          <h1 className="font-bold text-2xl">Logo</h1>
          </div>
            <div className="">
            <ul className="ul flex justify-center  gap-[2em]  items-center py-4 text-1xl ">
              
              <li className="text-orange-500">Home</li> 
              <li> Our Services</li> 
              <li>Contact Us</li> 
              <li>About Us</li> 
            </ul>
            </div>
            <div>
              <ul className="ul flex justify-between gap-[2em] text-1xl items-center py-4  m-5">
              
              <li className="rounded-full border-2 py-2 px-6   bg-orange-500">Sign Up</li> 
              <li className="rounded-full border-2 py-2 px-6  bg-orange-500">Sign In</li>  
                </ul>  
            </div>
        </div>
    )
}
export default Nav