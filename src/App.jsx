import gsap from 'gsap';
import NavBar from "./components/NavBar.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import { ScrollTrigger } from "gsap/all";
import MessageSection from "./sections/MessageSection.jsx";
import FlavorSection from "./sections/FlavorSection.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => (
  <main>
    <NavBar/>
    <HeroSection/>
    <MessageSection/>
    <FlavorSection/>
    <div className="h-dvh border border-red-500"></div>
  </main>
);

export default App;