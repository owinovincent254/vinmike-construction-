
function Contact(){
    return(

        <div className="flex ">

          <form className="flex-1" action="">
            <div className="pt-3 my-20">
            <input className="p-5 rounded-full m border-2 outline-0 w-[90%]" type="text" placeholder="First Name" />
            </div>
            <div className="my-20">
            <input className="p-5 rounded-full border-2 outline-0 w-[90%]" type="text" placeholder="Last Name" />
            </div>
            <div className="my-20">
            <input className="p-5 rounded-full border-2 outline-0 w-[90%]" type="text" placeholder="Email Addrees" />
            </div>
            <div className="my-10 ">
            <input className="p-5  rounded-full border-2 outline-0 w-[90%]" type="text" placeholder="Phone Number" />
            </div>
            <div className=" justify-center  flex ">
            <button className="border-2 rounded-full p-5 text-[#ffffff] bg-[#FF5318]   w-[50%]">Submit</button>
            </div>
          </form>
          <div className="flex-1">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7716748997627!2d36.7906184!3d-1.3124125000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f107d0d9d1f0f%3A0xe13a10bc3b43ad7b!2sMashimoni%20Squatters%20Primary%20School!5e0!3m2!1sen!2ske!4v1690878251897!5m2!1sen!2ske" width="900" height="700" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
    )
}
export default Contact