import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP , ScrollTrigger);


const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger:{
          trigger: element,
          scrub: true
        },
        y: 0,
        duration: 1,
        ease: 'power2.out',
        opacity:1
      })
    })
  })
  return (
    <ReactLenis root>
   <Header/> 
   <main>
    <Hero/>
    <About/>
    <Skill/>
    <Work/>
    <Contact/>
   </main>
   <Footer/>
   </ReactLenis>
  )
};

export default App;
