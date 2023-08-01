import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Categories from "../pages/Categories";
import Service from "../pages/Service";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign" element={<Signup/>} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/category" element={<Categories/>} />
        <Route path="/service" element={<Service/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
