
import { app } from "../firebase";
import { Link, useNavigate } from "react-router-dom"
import Loader from "./Loader";

import google from "../assets/images/google.png"
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { googleAuth } from "../auth";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";


function Sign() {

    const auth=getAuth(app)

    const navigate = useNavigate()
    

    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({});
    const [error, setError] = useState({});
    const [signUpError, setSignUpError] = useState("");
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    async function handleSignUp(e) {
        setLoading(true)
        e.preventDefault();
        const errors = {};
        (formData.firstName === undefined || formData.firstName === "") &&
            (errors.firstName = "Please Enter Your First Name");

        (formData.secondName === undefined || formData.secondName === "") &&
            (errors.secondName = "Please Enter Your Second Name");
        (formData.emailAddress === undefined || formData.emailAddress === "") &&
            (errors.emailAddress = "Please Enter  Your Email Address");
        (formData.Password === undefined || formData.Password === "") &&
            (errors.Password = "Please Enter Your Password");
        (formData.confirmPassword === undefined ||
            formData.confirmPassword === "") &&
            (errors.confirmPassword = "Please Confirm Your Password");

        setError(errors);

        console.log(formData);
        createUserWithEmailAndPassword(auth,formData.email,formData.Password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

        console.log(errors);

        setLoading(false)

        createUserWithEmailAndPassword(auth, formData.emailAddress, formData.Password)
            .then((userCredential) => {
                setLoading(false)
                const user = userCredential.user;

                console.log(user)

                navigate("/login")

            })
            .catch((error) => {
                setLoading(false)
                const errorMsg = error.message.substring(22, error.message.length - 2).split("-").join(" ");
                setSignUpError(errorMsg)
                console.log(error.message.substring(22, error.message.length - 2))

            });
        await addDoc(collection(db, "client"), formData);








    }
    function handleGoogleAuth() {
        googleAuth()
    }

    return (
        <div className="">
            {loading && <Loader />}
            <div className="">

                <div className="text-center text-[2em]">
                    <h4>Sign Up</h4>
                </div>
                {signUpError !== "" && <p className="text-red-500 text-center capitalize">{signUpError}</p>}
                <div className=" w-[50%] mx-auto">
                    {error.secondName && (
                        <p className="text-black text-center">{error.firstName}</p>
                    )}
                    <div className="mt-[em]">
                        <input className="rounded-full shadow  border-gray-300  border-2 w-[100%] p-7 my-[1em] outline-0" name="firstName" type="text" placeholder="First Name" onChange={(e) => handleChange(e)} />
                    </div>
                    {error.secondName && (
                        <p className="text-black text-center">{error.secondName}</p>
                    )}
                    <div>
                        <input className="rounded-full shadow border-gray-300  border-2 w-[100%] p-7 my-[1em] outline-0" name="secondName" type="text" placeholder="Second Name" onChange={(e) => handleChange(e)} />
                    </div>
                    {error.emailAddress && (
                        <p className="text-black text-center">{error.emailAddress}</p>
                    )}
                    <div>
                        <input className="rounded-full shadow border-gray-300  border-2 w-[100%] p-7 my-[1em] outline-0" name="emailAddress" type="email" placeholder="Email" onChange={(e) => handleChange(e)} />
                    </div>
                    {error.Password && (
                        <p className="text-black text-center">{error.Password}</p>
                    )}
                    <div className=" flex items-center pr-4 justify-between rounded-full shadow border-gray-300  border-2 w-[100%] my-[1em] outline-0 bg-white">
                        <input className=" flex-1 p-7 bg-transparent outline-0" name="Password" type={show ? "text" : "password"} placeholder="Password" onChange={(e) => handleChange(e)} />
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
                    <div className=" flex items-center pr-4 justify-between rounded-full shadow border-gray-300  border-2 w-[100%] my-[1em] outline-0 bg-white">
                        <input className="flex-1 p-7 bg-transparent outline-0" name="confirmPassword" type={show ? "text" : "password"} placeholder=" Confirm Password" onChange={(e) => handleChange(e)} />
                        <div
                            className="flex justify-end"
                            onClick={() => setShow((prev) => !prev)}
                        >
                            {show ? <AiFillEye size={20} /> : <AiFillEyeInvisible size={20} />}
                        </div>
                    </div>
                    <div className="flex justify-center m-[2em]">
                        <button className="rounded-md shadow border-gray-300  text-[1.5rem] border-2 text-center py-[1em] px-[1em]  outline-0 bg-orange-500" onClick={(e) => handleSignUp(e)}>Sign Up</button>
                    </div>
                    <div className="text-center">
                        <Link to="/login"> <p className="text-2xl">Already Have An Account<span className="text-orange-500 "> Login</span></p></Link>
                    </div>
                    <div className=" flex items-center py-4 my-[1em]">
                        <div className="flex-grow h-px bg-gray-400"></div>
                        <span className="flex-shrink font-bold ">OR</span>
                        <div className="flex-grow h-px bg-gray-400 "></div>
                    </div>
                    <div className="flex justify-center items-center gap-10 my-[3em] rounded-full shadow p-7 w-[100%]">
                        <img src={google} alt="" className="w-[50px]" />
                        <p className="text-orange-500 text-2xl font-bold" onClick={handleGoogleAuth}>
                            Sign In With Google</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sign