import gsap from 'gsap';
import NavBar from "./components/NavBar.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => (
  <>
    <NavBar/>
    <HeroSection/>
      <div className="h-dvh border border-red-500"></div>

  </>
);

export default App;