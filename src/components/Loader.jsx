import loader from "../assets/images/loader.gif"
function Loader() {
    return (
        
            <div className="bg-[rgba(255,255,255,.5)] h-[100vh] w-[100vw] flex justify-center items-center absolute top-0 left-0">
                <img src={loader} alt="" className="" />
            </div>
    
    )
}
export default Loader