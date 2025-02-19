import HeroSection from "./components/hero-section";
import AboutUs from "./components/about";
import TopNavbar from "./components/topnavbar";
import OfficeSection from "./components/office-section";
import ContactUs from "./components/contact-us";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";
import WhyChooseUs from "./components/whychooseus/why-choose-us";
import { useEffect } from "react";
import Aos from "aos";

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <TopNavbar />
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
      <OfficeSection />
      <ContactUs />
      <Toaster toastOptions={{ position: "top-center", duration: 4000 }} />
      <Footer />
    </>
  );
}
