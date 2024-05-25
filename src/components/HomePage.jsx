
import Testimonial from "./Testimonial"
import HeroSection from "./HeroSection"

import AboutSection from "./AboutSection"

export default function HomePage() {
   
  return (
    <>
    <HeroSection />
   <div className="w-[85vw] mx-auto ">
   <AboutSection />
    <Testimonial/>
   </div>
    </>

  )
}
