import { useState } from "react";
function Contact() {
  const [formData, SetFormData] = useState({});
  const [formErrors, setFormError] =useState({})
  const [ currentUser,SetcurrentUser]=useState({})
  function handleChange(e){
    SetFormData({...formData, [e.target.name]: e.target.value})
  }


  function Contact(e) {
    e.preventDefault();
    const errors = {};
    formData.firstName ===undefined && (errors.firstName = "Please enter firstName")
    formData.emailAddress ===undefined && (errors.emailAddress = "Please enter your Email")
    formData.subject ===undefined && (errors.subject = "Please enter the subject")
    formData.phoneNumber ===undefined && (errors.phoneNumber = "Please enter your phone number")
    formData.message ===undefined && (errors.message = "Please enter your message")
    setFormError(errors)
    console.log(errors);
  }
  return (
    <div className="flex ">
      <form className="flex-1" action="">
   <h1 className="text-7xl text-center">Contact Us</h1>
        <div className="pt-3 my-20">
        {formErrors.firstName && <p className="text-red-500 text-center ">{formErrors.firstName} </p>}
          <input
          onChange={(e) => handleChange(e)}
            className="p-5 rounded-full m border-2 outline-0 w-[90%]"
            type="text"  
              name="firstName"
            placeholder="Enter  First Name"
          />
        </div>
        <div className="my-20">
        {formErrors.emailAddress && <p className="text-red-500  text-center ">{formErrors.emailAddress} </p>}
          <input
             onChange={(e) => handleChange(e)}
            className="p-5 rounded-full border-2 outline-0 w-[90%]"
            type="text"
            name="emailAddress"
            placeholder="Enter your emailAddress"
          />
        </div>
        <div className="my-10 ">
        {formErrors.phoneNumber && <p className="text-red-500  text-center ">{formErrors.phoneNumber} </p>}
          <input
             onChange={(e) => handleChange(e)}
             className="p-5  rounded-full border-2 outline-0 w-[90%]"
            type="text"
            name="Enter your phoneNumber"
            placeholder="Phone Number"
          />
        <div className="my-20">
        {formErrors.subject && <p className="text-red-500  text-center ">{formErrors.subject} </p>}
          <input
             onChange={(e) => handleChange(e)}
             className="p-5 rounded-full border-2  outline-0 w-[90%]"
            type="text"
            name="subject"
            placeholder="Enter The Subject"
          />
        </div>
        <div>
        {formErrors.message && <p className="text-red-500  text-center ">{formErrors.message} </p>}
          <textarea
          onChange={(e) => handleChange(e)}
          placeholder="Enter The Message"
          className="contain w-[90%] border-2  outline-none"
          name="message"
          rows="7"
          cols="5">
          </textarea>
        </div>
        </div>
        <div className=" justify-center  flex ">
          <button  className="border-2 rounded-full p-5 text-[#ffffff] bg-[#FF5318]   w-[50%]" onClick={(e) => Contact(e)}> 
            Submit
          </button>
        </div>
      </form>
      <div className="flex-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7716748997627!2d36.7906184!3d-1.3124125000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f107d0d9d1f0f%3A0xe13a10bc3b43ad7b!2sMashimoni%20Squatters%20Primary%20School!5e0!3m2!1sen!2ske!4v1690878251897!5m2!1sen!2ske"
          width="900"
          height="1050"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
export default Contact;
