import { Link } from "react-router-dom"
function More (){
    return(
        <div className="m-[2em] flex justify-center   ">
         <Link to="/service"> <button className="rounded-md border-2 bg-orange-500 text-[2rem] text-center py-4 px-4">Show More</button> </Link> 
        </div>
    )
}
export default More
