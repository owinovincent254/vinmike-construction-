import { Link, useNavigate } from "react-router-dom"
import google from "../assets/images/google.png"
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { googleAuth } from "../auth";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";


function Form() {
    const navigate = useNavigate()
    const auth = getAuth()
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({});
    const [error, setError] = useState({});
    const [signUpError, setSignUpError] = useState("")

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    async function handleSumbit(e) {
        e.preventDefault();
        const errors = {};

        (formData.emailAddress === undefined || formData.emailAddress === "") &&
            (errors.emailAddress = "Please Enter  Your Email Address");
        (formData.proffession === undefined || formData.proffession === "") &&
            (errors.proffession = "Please Specify Your Proffession");
        (formData.image === undefined || formData.proffession === "") &&
            (errors.image = "Upload Your Image");
        (formData.phoneNumber === undefined || formData.phoneNumber === "") &&
            (errors.phoneNumber = "Please Enter  Your Phone Number");




        setError(errors);

        // await addDoc(collection(db, "form"), formData);
        onAuthStateChanged(auth, (user) => {
            console.log(user.uid)
            setDoc(doc(db, "fundiDetails", user.uid), formData)
            navigate("/fundi-profile")
        })







    }


    return (
        <div className="">
            <div className="">

                <div className="text-center text-[2em]">
                    <h4>Please Enter Your Details</h4>
                </div>
                {signUpError !== "" && <p className="text-red-500 text-center capitalize">{signUpError}</p>}
                <div className=" w-[50%] mx-auto">

                    {error.emailAddress && (
                        <p className="text-black text-center">{error.emailAddress}</p>
                    )}

                    <div>
                        <input className="rounded-full shadow border-gray-300  border-2 w-[100%] p-7 my-[1em] outline-0" name="emailAddress" type="email" placeholder="Email" onChange={(e) => handleChange(e)} />
                    </div>
                    {error.proffession && (
                        <p className="text-black text-center">{error.proffession}</p>
                    )}

                    <div>
                        <input className="rounded-full shadow border-gray-300  border-2 w-[100%] p-7 my-[1em] outline-0" name="proffession" type="text" placeholder="proffession" onChange={(e) => handleChange(e)} />
                    </div>
                    {error.image && (
                        <p className="text-black text-center">{error.image}</p>
                    )}

                    <div>
                        <input className="rounded-full shadow border-gray-300  border-2 w-[100%] p-7 my-[1em] outline-0" name="image" type="file" placeholder="Upload Image" onChange={(e) => handleChange(e)} />
                    </div>

                    {error.phoneNumber && (
                        <p className="text-black text-center">{error.phoneNumber}</p>
                    )}
                    <div>
                        <input className="rounded-full shadow border-gray-300  border-2 w-[100%] p-7 my-[1em] outline-0" name="phoneNumber" type="number" placeholder="Phone Number" onChange={(e) => handleChange(e)} />
                    </div>






                    <div className="flex justify-center m-[2em]">
                        <button className="rounded-md shadow border-gray-300  text-[1.5rem] border-2 text-center py-[1em] px-[1em]  outline-0 bg-orange-500" onClick={(e) => handleSumbit(e)}>Submit</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Form