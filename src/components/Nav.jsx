import magenta from "../assets/images/magenta.png"
import { Link } from "react-router-dom"
function Nav(){
    return(
        <div className=" flex justify-between items-center capitalize sticky  top-0 w-[100%] bg-white z-40 ">
          <div className="">
          <Link to="/"><img src={magenta} alt="logo's image" className="w-[50%]" /></Link>
          </div>
            <div className="">
            <ul className="ul flex justify-center  gap-[2em]  items-center py-4 text-1xl ">
              
            <Link to="/"><li className="text-orange-500">Home</li></Link>
            <Link to="/service"><li> Our Services</li></Link>
            <Link to="/"><li>Contact Us</li></Link>
            <Link to="/"><li>About Us</li></Link>
            <Link to="/category"><li>Categories</li></Link>
            </ul>
            </div>
            <div>
              <ul className="ul flex justify-between gap-[2em] text-1xl items-center py-4  m-5">
              
              <Link to="/sign"><li className="rounded-full border-2 py-2 px-6   bg-orange-500">Sign Up</li></Link> 
              <Link to="/login"><li className="rounded-full border-2 py-2 px-6  bg-orange-500">Sign In</li></Link>  
                </ul>  
            </div>
        </div>
    )
}
export default Nav