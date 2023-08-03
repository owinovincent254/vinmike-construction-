import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import location from "../assets/images/location.svg";
function Footer() {
  return (
    <div className="">
      <div className=" mt-[2em]  bg-orange-500 w-[100% h-[50%]]">
        <div className=" container mx-auto flex justify-center gap-5 flex-1 itens-start mb-5">
          <h4 className="text-[2rem] font-bold  flex-1 mt-[2em]">
            THE SITE OF YOUR CHOICE
          </h4>
          <img  src={facebook} alt="facebook image" className="w-[3%] mt-[2em]" />
          <img src={twitter} alt="facebook image" className="w-[3%] mt-[2em]" />
          <img src={instagram} alt="facebook image" className="w-[2%] mt-[2em]" />
          <img src={linkedin} alt="facebook image" className="w-[2%] mt-[2em]" />
          <img src={location} alt="facebook image" className="w-[2%] mt-[2em]" />
        </div>
        <div className="flex justify-between container mx-auto">
          <div className="">
            <div className="">
              <h4 className="mb-[2em] mt-[2em] text-[1.5rem] font-bold">SERVICES</h4>
            </div>
            <ul className="text-white">
              <li className="m-[1em]">Tilling</li>
              <li className="m-[1em]">Capentry</li>
              <li className="m-[1em]">Masonry</li>
              <li className="m-[1em]">Painting</li>
            </ul>
          </div>
          
            <div>
              <div>
                <h4 className="mb-[2em] mt-[2em] text-[1.5rem] font-bold">ABOUT US</h4>
              </div>
              <ul className="text-white">
                <li className="m-[1em]">Our history</li>
                <li className="m-[1em]">Benefits</li>
                <li className="m-[1em]">Teams</li>
                <li className="m-[1em]">Careers</li>
              </ul>
            </div>
            <div>
              <div>
                <div>
                  <h4 className="mb-[2em] mt-[2em] text-[1.5rem] font-bold text-center">LEGAL</h4>
                </div>
                <ul className="text-white">
                  <li className="m-[1em]">Terms & Conditions</li>
                  <li className="m-[1em]">Privacy & Policy</li>
                  <li className="m-[1em]">Terms Of Use</li>
                </ul>
              </div>
            </div>
            <div>
                <div>
                    <div>
                       <h4 className="mb-[2em] mt-[2em] text-[1.5rem] font-bold">SUBSCRIBE NOW</h4> 
                    </div>
                    <div className="">
                        <div >
                    <input className="rounded-md  py-[2em] px-[3em] mb-[2em] text-start cursor-pointer outline-0" type="text" placeholder="Email Address" />
                    </div>
                    <div>
                    <button className="rounded-md border-2 py-[1.7em] px-[9em] mb-[2em] bg-[white] items-center">SUBMIT</button>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Footer;
