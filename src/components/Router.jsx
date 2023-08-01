import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutAs from "../pages/AboutAs";
import ContactAs from "../pages/ContactAs";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutAs />} />
        <Route path="/contact" element={<ContactAs />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
