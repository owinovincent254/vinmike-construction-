import { useContext, useEffect } from "react"
import magenta from "../assets/images/magenta.png"
import { Link } from "react-router-dom"
import { StateContext } from "../context/state"
function Nav() {
  const { isLoggedin, setIsLoggedIn } = useContext(StateContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setIsLoggedIn(true)
    }
    else{
      setIsLoggedIn(false)
    }
  }, [])

  return (
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
          <Link to="/fundi"><li>Fundis</li></Link>
        </ul>
      </div>
      <div>
        {
          isLoggedin ? (

            <ul className="ul flex justify-between gap-[2em] text-1xl items-center py-4  m-5">
              <Link to="/fundi-profile"><li className="">My Profile</li></Link>
              <Link to=""><li className="rounded-full border-2 py-2 px-6  bg-orange-500">Sign Out</li> </Link>
            </ul>
          ) : (
            <ul className="ul flex justify-between gap-[2em] text-1xl items-center py-4  m-5">
              <Link to="/category"><li className="rounded-full border-2 py-2 px-6   bg-orange-500">Sign Up</li></Link>
              <Link to="/log"><li className="rounded-full border-2 py-2 px-6  bg-orange-500">Sign In</li> </Link>
            </ul>
          )
        }



      </div>
    </div>
  )
}
export default Nav