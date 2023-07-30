function Nav(){
    return(
        <div className=" flex justify-between   w-[100%] items-center capitalize  mt-[2em] m-5">
          <div className="">
          <h1>Logo</h1>
          </div>
            <div className="">
            <ul className="ul flex justify-center  gap-[2em]  items-center py-4 font-bold text-2xl ">
              
              <li>Home</li> 
              <li> Our Services</li> 
              <li>Contact Us</li> 
              <li>About Us</li> 
            </ul>
            </div>
            <div>
              <ul className="ul flex justify-between gap-[2em] text-2xl items-center py-4 font-bold m-5">
              
              <li className="rounded-full border-2-gray">Sign Up</li> 
              <li>Sign In</li>  
                </ul>  
            </div>
        </div>
    )
}
export default Nav