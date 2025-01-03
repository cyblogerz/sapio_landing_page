
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { Hero } from "@/components/Hero";
import { Sponsors } from "@/components/Sponsors";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";
import { Pricing } from "@/components/Pricing"; 
import { Newsletter } from "@/components/Newsletter";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Cta } from "@/components/Cta";
import { About } from "@/components/about";
import { Separator } from "@/components/ui/separator";

function App() {
  return (
    <>
      
      <div className="content">
      <Hero />
      <Separator className="w-[80%]"/>
      <Sponsors />
      <About />
      <Separator className="w-[80%]"/>
      <HowItWorks />
      <Features />
      <Services />
      <Separator className="w-[80%]"/>
      <Cta />
      <Separator className="w-[80%]"/>
      <Testimonials />
      <Separator className="w-[80%]"/>
      <Team />
      {/* <Pricing /> */}
      <Newsletter />
      <FAQ />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;