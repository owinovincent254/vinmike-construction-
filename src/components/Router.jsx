import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";


import Signup from "../pages/Signup";

 

import Signin from "../pages/Signin";
import Categories from "../pages/Categories";
import Service from "../pages/Service";

import AboutAs from "../pages/AboutAs";
import ContactAs from "../pages/ContactAs";
import ClientSignup from "../pages/ClientSignup";
import ConstructorSignup from "../pages/ConstructorSignup";
import ConstructorLogin from "../pages/ConstructorLogin";
import Fundis from "../pages/Fundis";
import Forms from "../pages/Forms";
import Logins from "../pages/Logins";
import FundiProfile from "./FundiProfile";

function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/service" element={<Service />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutAs />} />
        <Route path="/contact" element={<ContactAs />} />

 
        <Route path="/" element={<Home/>} />
        <Route path="/sign-up" element={<ClientSignup/>} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/fundi" element={<Fundis/>} />
        <Route path="/category" element={<Categories/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/form" element={<Forms/>} />
        <Route path="/log" element={<Logins/>} />
        <Route path="/about" element={<AboutAs />} />
        <Route path="/contact" element={<ContactAs />} />
        <Route path="/constructor" element={<ConstructorSignup/>} />
        <Route path="/constructors" element={<ConstructorLogin/>} />
        <Route path="/fundi-profile" element={<FundiProfile/>} />



      </Routes>
    </BrowserRouter>
  );
}
export default Router;
