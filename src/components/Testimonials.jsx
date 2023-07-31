import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import removed from "../assets/images/removed.png";
import mose from "../assets/images/mose.jpg"
import hawah from "../assets/images/hawah.png"
function Testimonials() {
  return (
    <div className="m-[2em]">
      <div className="flex justify-center font-bold text-5xl">
        <h2>Certisfied Customers</h2>
      </div>
      <div className="flex justify-between gap-5">
      <div className="flex items-center gap-5">
        <div className="rounded-full border-2 w-[350px]">
          <img src={removed} alt="" className="w-[100%] rounded-full"/>
        </div>
        <div>
          <RiDoubleQuotesL size={40} />
          <h1 className="text-[2rem]">Vincent Otieno</h1>

          <p className="w-[50%]">
            “Speak of quickest of responses and personalized customer service
            -Fundi APP it is! They deliver the item to you -how convenient!! I
            highly absolutely recommend them for all your repair work!! Every
            blessing!.”
          </p>
          <RiDoubleQuotesL size={40} />
        </div>
      </div>
      <div className="flex items-center gap-5 container mx-auto">
        <div className="rounded-full border-2 w-[200px]">
          <img src={mose} alt="" className="w-[100%] rounded-full"/>
        </div>
        <div>
          <RiDoubleQuotesL size={40} />
          <h1 className="text-[2rem]">Mr.Moses Muliro</h1>

          <p className="w-[50%]">
          “Wow! This Is the best app, thank you for good work and having professional fundis!! Bravoo!.”


          </p>
          <RiDoubleQuotesL size={40} />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="rounded-full border-2 w-[400px]">
          <img src={hawah} alt="" className="w-[100%] rounded-full"/>
        </div>
        <div>
          <RiDoubleQuotesL size={40} />
          <h1 className="text-[2rem]">Mrs.Hawa</h1>

          <p className="w-[50%]">
          I have engaged Fundis a few times, in small and big jobs, both in our school and in my house, and their prompt response to call and excellent service, left me fully satisfied.


          </p>
          <RiDoubleQuotesL size={40} />
        </div>
      </div>
      </div>

    </div>
  );
}
export default Testimonials;
