import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import CompanyFactsSection from "./components/CompanyFactsSection";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <CompanyFactsSection/>
      {/* Temp */}
      <div className="pb-10"></div>
    </div>
  );
}

export default App;
