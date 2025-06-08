
import Logo from "./components/Logo"
import NavBar from "./components/NavBar"
import ExperienceSection from "./sections/ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"


const App = () => {
  return (
   <>
    <NavBar/>
    <Hero/>
    <ShowcaseSection/>
    <Logo/>
    <FeatureCards/>
    <ExperienceSection/>
    <TechStack/>
    <Testimonials/>
    <Contact />
    <Footer/>
    
   </>
  )
}

export default App