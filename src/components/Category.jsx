import { Link } from "react-router-dom"

function Category (){
    return(
        <div>
            <div className="text-center mb-10">
            <h2 className="text-[2rem] font-bold">Sign Up</h2>
            <h3 className="m-[2em] text-[1rem]">Please Specify Weather You Want To Find A Technician Or Join As A Technician </h3>
            </div>
            <div className="flex justify-center gap-5">
            <Link to="/sign"><button className="rounded-md py-4 px-10 border-2 font-bold bg-orange-500">Find A Technician</button></Link>
                <p className="mt-[1em] text-[1rem] font-bold">Or</p>
                <Link to="/sign"> <button className="rounded-md py-4 px-8 border-2 font-bold bg-orange-500">Join As A Technician</button></Link>
            </div>
        </div>
    )
}
export default Category