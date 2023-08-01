import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
 
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Categories from "../pages/Categories";
import Service from "../pages/Service";

import AboutAs from "../pages/AboutAs";
import ContactAs from "../pages/ContactAs";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
 
        <Route path="/" element={<Home/>} />
        <Route path="/sign" element={<Signup/>} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/category" element={<Categories/>} />
        <Route path="/service" element={<Service/>} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutAs />} />
        <Route path="/contact" element={<ContactAs />} />

      </Routes>
    </BrowserRouter>
  );
}
export default Router;
