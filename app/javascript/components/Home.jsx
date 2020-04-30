import React from "react";

import Banner from "./landing_page/Banner";
import SplittedSection from "./landing_page/SplittedSection";
import HowItWorks from "./landing_page/HowItWorks";
import {
  howItWorksContent,
  mockupContent,
  superheroContent,
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
    </div>
  );
};

export default Home;
