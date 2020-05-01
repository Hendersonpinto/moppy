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
      <SplittedSection
        title={mockupContent.title}
        message={mockupContent.message}
        buttonText={mockupContent.buttonText}
        imageId={mockupContent}
        file={mockupContent.image.file}
        alt={mockupContent.image.alt}
        id={mockupContent.image.id}
      />
      <HowItWorks
        title={howItWorksContent.title}
        message={howItWorksContent.message}
        steps={howItWorksContent.steps}
        background={howItWorksContent.background}
      />
      <Testimonials
        title={testimonialsContent.title}
        quotes={testimonialsContent.quotes}
        file={testimonialsContent.image.file}
        alt={testimonialsContent.image.alt}
        id={testimonialsContent.image.id}
        quoteIcon={testimonialsContent.quoteIcon}
        polyIcon={testimonialsContent.polyIcon}
      />
      <SplittedSection
        classname={superheroContent.classname}
        title={superheroContent.title}
        message={superheroContent.message}
        buttonText={superheroContent.buttonText}
        imageId={superheroContent}
        file={superheroContent.image.file}
        alt={superheroContent.image.alt}
        id={superheroContent.image.id}
      />
      <CTA
        title={cTAContent.title}
        buttonClass={cTAContent.buttonClass}
        buttonText={cTAContent.buttonText}
        img1={cTAContent.yoga}
        img2={cTAContent.plants}
      />
      <Footer />
    </div>
  );
};

export default Home;
