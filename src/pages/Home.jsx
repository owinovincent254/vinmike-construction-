import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Choose from "../components/Choose";
import Heros from "../components/Heros";
import More from "../components/More";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Choose />
      <Heros />
      <More />
      <Testimonials />
    </div>
  );
}
export default Home;
