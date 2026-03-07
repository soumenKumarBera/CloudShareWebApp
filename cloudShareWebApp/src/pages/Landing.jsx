import { feture, priceingSection, testimonials } from "../assets/data";
import CTASection from "../componnets/landing/CTASection";
import FetureSection from "../componnets/landing/FetureSection";
import { FooterSection } from "../componnets/landing/FooterSection";
import HeroSection from "../componnets/landing/HeroSection";
import PrisingSection from "../componnets/landing/PriceingSection";
import TesetimonialSection from "../componnets/landing/TestimonialSection";
const Landing = () => {
  return (
    <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
      {/* {Hero section} */}
      <HeroSection />

      {/* {Feture section} */}
      <FetureSection fetures={feture} />

      {/* {Pricing section} */}
      <PrisingSection pricingPlan={priceingSection} />

      {/* {Testimoials section} */}
      <TesetimonialSection testimonials={testimonials} />

      {/* {CTA section} */}
      <CTASection />

      {/* {Footer section} */}
      <FooterSection />
    </div>
  );
};
export default Landing;
