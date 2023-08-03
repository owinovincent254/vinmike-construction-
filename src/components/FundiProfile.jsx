import { useEffect, useState } from "react";
import loader from "../assets/images/loader.gif"
import Nav from "./Nav"
import Footer from "./Footer";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import nm from "../assets/images/nm.png"
function FundiProfile() {
    const [details, setDetails] = useState({})
    async function getDetails() {
        let userData = JSON.parse(localStorage.getItem("user"))
        const uid = userData.uid
        console.log(uid)


        const querySnapshot = await getDoc(doc(db, "fundis", uid));
        setDetails(querySnapshot.data())
        console.log(details)
       
    }
    useEffect(() => {
        getDetails()
    }, [])

    return (

        <div>
            <Nav />
            <div className="text-center">
                <div>
            <h1 className="text-[2rem] underline text-orange-500">My Profile AS a fundi</h1>
            <div className="flex justify-center  ">
        <img src={nm} alt="" className="w-[10%]"/>
            </div>
            </div>
            </div>
            <div className="border-2 w-[50%] shadow container mx-auto h-[100%] ">
                <div className=" flex justify-start p-2">
                    <h4 className="font-bold">First Name:</h4>
            <p className="text-center">{details.firstName}</p>
            </div>
            <div className="flex justify-start p-2">
                <h2 className="font-bold">Second Name:</h2>
            <p className="text-center">{details.secondName}</p>
            </div>

            <div className="flex justify-start p-2">
                <h2 className="font-bold">Email Address:</h2>
            <p className="text-center">{details.emailAddress}</p>
            </div>
            </div>
            <Footer />
            
        </div>

    )
}
export default FundiProfile