import Hero from "app/components/Hero";
import WhyUs from "app/components/WhyUs";
import PricingPlans from "app/components/PricingPlans";
import HowMake from "app/components/HowMake";
import Testimonials from "app/components/Testimonials";
import FAQ from "app/components/FAQ";
import Riad from "app/components/Riad";
import Footer from "app/components/Footer";
import GenderSelectionCard from "app/components/GenderSelectionCard";
export default function GenderSelection() {
  return (
    <div>
      <Hero imageSrc="/Hero/image3.png" />
      <GenderSelectionCard />
      <WhyUs />
      <PricingPlans />
      <HowMake />
      <Testimonials />
      <FAQ />
      <Riad />
      <Footer />
    </div>
  );
}
