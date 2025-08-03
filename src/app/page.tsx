import DataGender from "./components/DataGender";
import Hero   from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import WhyUs from "./components/WhyUs";
import PricingPlans from "./components/PricingPlans";
import HowMake from "./components/HowMake";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Riad from "./components/Riad";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <ServicesSection />
        <WhyUs />
        <PricingPlans />
        <DataGender/>
        <HowMake />
        <Testimonials />
        <FAQ />
        <Riad />
        <Footer />
      </main>
    </div>
  );
}
