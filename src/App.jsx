import BrowsersSection from "./components/BrowsersSection";
import ContactUs from "./components/ContactUs";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div className="w-full  bg-white font-Rubik">
      <Header />
      <HeroSection />
      <Features />
      <BrowsersSection />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
