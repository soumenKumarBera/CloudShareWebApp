import { useEffect } from "react";
import { feture, priceingSection, testimonials } from "../assets/data";
import CTASection from "../componnets/landing/CTASection";
import FetureSection from "../componnets/landing/FetureSection";
import { FooterSection } from "../componnets/landing/FooterSection";
import HeroSection from "../componnets/landing/HeroSection";
import PrisingSection from "../componnets/landing/PriceingSection";
import TesetimonialSection from "../componnets/landing/TestimonialSection";

import { useClerk, useUser } from "@clerk/react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { openSignIn, openSignUp } = useClerk();
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
      {/* {Hero section} */}
      <HeroSection openSignIn={openSignIn} openSignUp={openSignUp} />

      {/* {Feture section} */}
      <FetureSection fetures={feture} />

      {/* {Pricing section} */}
      <PrisingSection pricingPlan={priceingSection} openSignUp = {openSignUp}/>

      {/* {Testimoials section} */}
      <TesetimonialSection testimonials={testimonials} />

      {/* {CTA section} */}
      <CTASection openSignUp = {openSignUp}/>

      {/* {Footer section} */}
      <FooterSection />
    </div>
  );
};
export default Landing;
