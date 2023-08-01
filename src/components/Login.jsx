import { Link } from "react-router-dom"
import { useState } from "react"
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

function Login (){
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({});
    const [error, setError] = useState({});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    function handleSignUp(e) {
        e.preventDefault();
        const errors = {};
        (formData.emailAddress === undefined || formData.emailAddress === "") &&
            (errors.emailAddress = "Please Enter  Your Email Address");
        (formData.Password === undefined || formData.Password === "") &&
            (errors.Password = "Please Enter Your Password");
        (formData.confirmPassword === undefined ||
            formData.confirmPassword === "") &&
            (errors.confirmPassword = "Please Confirm Your Password");

        setError(errors);
        console.log(formData);
        console.log(errors);
    }
    return(
        <div>
           <div className="">
            <div className="text-center text-3xl">
                <h4>Login</h4> 
            </div>
            <div  className=" w-[50%] mx-auto ">
            {error.emailAddress && (
                        <p className="text-black text-center">{error.emailAddress}</p>
                    )}
            <div>
                <input className="rounded-full shadow border-gray-300  border-2 w-[100%] p-7 my-[2em] outline-0" type="email" placeholder="Email" onChange={(e) => handleChange(e)} />
                </div>
                {error.Password && (
                        <p className="text-black text-center">{error.Password}</p>
                    )}
                <div className=" flex items-center pr-4 justify-between rounded-full shadow border-gray-300  border-2 w-[100%] my-[2em] outline-0 bg-white">
                <input className="flex-1 p-7 bg-transparent outline-0" name="confirmPassword" type={show ? "text" : "password"} placeholder="Password"onChange={(e) => handleChange(e)} />
                <div
                            className="flex justify-end"
                            onClick={() => setShow((prev) => !prev)}
                        >
                            {show ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
                        </div>

                </div>
                {error.confirmPassword && (
                        <p className="text-black text-center">{error.confirmPassword}</p>
                    )}
                <div className=" flex items-center pr-4 justify-between rounded-full shadow border-gray-300  border-2 w-[100%] my-[2em] outline-0 bg-white">
                <input className="flex-1 p-7 bg-transparent outline-0" name="confirmPassword" type={show ? "text" : "password"} placeholder=" Confirm Password"  />
                <div
                            className="flex justify-end"
                            onClick={() => setShow((prev) => !prev)}
                        >
                            {show ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
                        </div>

                </div> 
                <div className="text-center text-3xl">
                <h4>Forgot Password?</h4>
                </div>
                <div>
                <button  className="rounded-full shadow border-gray-300  border-2 w-[100%] p-7 my-[2em] outline-0 text-3xl bg-orange-500" onClick={(e) => handleSignUp(e)}>Login</button>
            </div>
            <div className="text-center text-3xl">
            <Link to="/sign"> <h4>Don't Have An Account?<span className="text-orange-500">Sign Up</span></h4></Link>
            </div>
            </div>
            </div> 
        </div>
    )
}
export default Login