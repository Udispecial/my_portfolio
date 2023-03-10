import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a positive, enthusiastic and competent Web Developer who, over the
        years, has built up a diverse range of skills, qualities and attributes
        that guarantee I will perform highly as a Web Developer.
      </SectionText>
      <Button
        onClick={() => (window.location = "mailto:uduakedet23@gmail.com")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
