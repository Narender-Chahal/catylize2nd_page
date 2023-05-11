import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderSection from "./components/HeaderSection";
import MyNav from "./components/MyNav";
import IdentifySection from "./components/IdentifySection";
import DemoSection from "./components/DemoSection";
import OurAprochSection from "./components/OurAprochSection";
import CloseSection from "./components/CloseSection";
import Accordian from "./components/Accordian";
import SliderSection from "./components/SliderSection";
import TargetSection from "./components/TargetSection";
import FooterSection from "./components/FooterSection";
import Preloader from "./components/Preloder";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({
      once: false,
      duration: 1500,
      delay: 200,
    });
  }, []);

  return (
    <>
      <Preloader />
      <MyNav />
      <HeaderSection />
      <IdentifySection />
      <DemoSection />
      <OurAprochSection />
      <CloseSection />
      <Accordian />
      <SliderSection />
      <TargetSection />
      <FooterSection />
    </>
  );
}

export default App;
