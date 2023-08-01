import { Link } from "react-router-dom"
function Hero (){
    return(
<div className=" bg-[url('assets/images/max.jpg')] bg-no-repeat bg-center h-[70vh] w-[100vw] relative">
    <div className=" absolute translate-y-52 translate-x-36" >
<p className=" text-5xl w-[50%]  text-white font-bold mb-8">Digitally Find and Hire Exceptional Artisans and Builders
</p>
<div className=" flex justify-start gap-4">
<Link to="/category"><button  className="border-2 rounded-md border-orange-500 text-center bg-orange-500 py-4 px-4 text-2xl">Find A Technician</button></Link>
<h2 className="mt-5 text-2xl">Or</h2>
<Link to="/category"><button className="border-2 rounded-md border-orange-500 text-center bg-orange-500 py-4 px-4 text-2xl">Join As A Technician</button></Link>
</div>
</div>
</div>
    )
}
export default Hero