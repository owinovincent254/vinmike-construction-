import kennedy from "../assets/images/kennedy.jpg"
import mose from "../assets/images/miroshnichenko.jpg"
import vin from "../assets/images/foerder.jpg"
import ken from "../assets/images/kim.jpg"
import mos from "../assets/images/kartik.jpg"
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"
function Fundi() {
    const [data, setData] = useState([])
    useEffect(() => {

        async function getData() {
            const querySnapshot = await getDocs(collection(db, "fundiDetails"));
            // console.log(querySnapshot)


            querySnapshot.forEach((doc) => {
                // console.log(doc)
                setData(prev => ([...prev, doc.data()]))
                // console.log(data)


            });

        }
        getData()
    }, [])

    let uniqueData = []
    let filterData = data.filter((el) => {
        console.log(el)
        let checkDuplicates = uniqueData.includes(el.emailAddress)
        if (!checkDuplicates) {
            uniqueData.push(el.emailAddress)
            return true
        }
        return false;
    }, [])
    console.log(filterData)


    return (
        <div>
            {
                filterData.map((fundi) => {
                    return (
                        <div className="container items-center border-2 w-[30%] shadow  mx-auto h-[100%] bg-orange-500 ">
                            <div className="">
                                <div className="flex justify-center m-[2em]">
                                <img src={vin} alt=""className="w-[80%]"/>
                                </div>
                                <div className="m-[1em] flex justify-center font-bold">
                                    <h1 className="">Email Address:</h1>
                                <p className="flex justify-center  text-white">{fundi.emailAddress}</p>
                                </div>
                                
                                <div className="m-[1em] flex justify-center font-bold">
                                    <h1>Proffession:</h1>
                                <p className="flex justify-center text-1xl text-white">{fundi.proffession}</p>
                                </div>
                                <div className="m-[1em] flex justify-center font-bold">
                                    <h1>Phone Number:</h1>
                                <p className="flex justify-center text-1xl text-white">{fundi.phoneNumber}</p>
                                </div>
                            
                            

                            </div>
                        </div>
                    )
                })
            }
            {/* <p className="text-center m-[2em] font-bold underline text-3xl">SEE SOME OF OUR PROFFESSIONAL CONSTRUCTORS AND AREAS OF THEIR SPECIALIZATION</p>
            <div className="mx-auto container flex justify-center gap-5">
                <div className=" border-2 w-[20%] h-[50vh]shadow rounded-md p-[1em]">
                    <h2 className="text-center font-bold text-2xl">Kennedy Moses</h2>
                    <img src={kennedy} alt="" className="w-[270px] p-[1em]" />
                    <div className="flex justify-center ">
                        <h2 className="text-center font-bold">Proffession:</h2>
                        <h2 className="text-center">Electrician;</h2>
                    </div>
                </div> */}






            {/* </div> */}

        </div>
    )
}
export default Fundi
