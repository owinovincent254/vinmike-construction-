 function About (){
    return(
        <div className="mt-[2em] flex justify-between gap-10">
        <div className=" bg-[url('assets/images/aleksey.jpg')] bg-no-repeat bg-left bg-cover h-[50vh] w-[50vw]"  >
            
        </div>
        <div className="bg-orange-500 p-2">
            <div className="translate-y-32 translate-x-32 w-[50%]">
                <div className="mb-[2.5em]">
            <h4 className="text-black font-bold text-2xl">The Leading Technology Company for Hiring Fixers and Builders
</h4>
</div>
<div className="mb-[2.5em]">
<p className="text-white">Using a web and mobile application, we’ve made it easy to find and hire competent, vetted, and accredited artisans and builders.

</p>
</div>
<button className="border-2 bg-white py-5 px-5 rounded-md">More About Us</button>
</div>

        </div>
        </div>
    )
 }
 export default About