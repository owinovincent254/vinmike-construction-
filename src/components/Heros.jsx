import blue from "../assets/images/blue.jpg"
function Heros (){
    return(
       <div className=" mt-[3em] container mx-auto">
        <div className="text-center text-5xl font-bold">
            <h3 className="">Our Services</h3>
        </div>
        <div className="mt-[2em] flex justify-center gap-[2em]">
        <div className=" w-[40%] h-[50vh] bg-[url('assets/images/blue.jpg')] bg-no-repeat bg-left bg-cover">
<h3 className="absolute translate-y-52 translate-x-48 text-white text-3xl font-bold">PAINTING</h3>
        </div>
        <div className="w-[40%] h-[50vh] bg-[url('assets/images/pixabay1.jpg')] bg-no-repeat bg-left bg-cover">
        <h3 className="absolute translate-y-52 translate-x-32 text-white text-3xl font-bold">ELECTRICAL WORKS</h3>
        </div>
        <div className="w-[40%] h-[50vh] bg-[url('assets/images/rahubovskiy.jpg')] bg-no-repeat bg-left bg-cover">
        <h3 className="absolute translate-y-52 translate-x-32 text-white text-3xl font-bold">APPLIANCE FIXING</h3>
        </div>
       </div> 
       </div>
    )
}
export default Heros