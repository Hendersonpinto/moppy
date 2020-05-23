import React from "react";

import Banner from "./landing_page/Banner";
import SplittedSection from "./landing_page/SplittedSection";
import HowItWorks from "./landing_page/HowItWorks";
import Testimonials from "./landing_page/Testimonials";
import CTA from "./landing_page/CTA";
import Footer from "./landing_page/Footer";
import {
  howItWorksContent,
  mockupContent,
  superheroContent,
  testimonialsContent,
  cTAContent,
} from "./landing_page/content";

const Home = () => {
  return (
    <div>
      <Banner />
      <SplittedSection content={mockupContent} />
      <HowItWorks content={howItWorksContent} />
      <Testimonials content={testimonialsContent} />
      <SplittedSection content={superheroContent} />
      <CTA content={cTAContent} />
      <Footer />
    </div>
  );
};

export default Home;
