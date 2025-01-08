import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@library/projects";

import AboutSection from "@components/sections/About";
import About2Section from "@components/sections/About2";
import ServicesSection from "@components/sections/Services";
import CountersSection from "@components/sections/Counters";
import ProjectsListSection from "@components/sections/ProjectsList";
import FeaturesSection from "@components/sections/Features";
import RenovationSection from "@components/sections/Renovation";
import EstimatedPriceSection from "@components/sections/EstimatedPrice";

const HeroSlider = dynamic( () => import("@components/sliders/Hero"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );

const Home1 = (props) => {
  return (
    <Layouts transparent>
      <>
        <HeroSlider />        
        <AboutSection />   
        <ServicesSection />
        <About2Section />
        <CountersSection />
        <ProjectsListSection projects={props.projects} />
        <FeaturesSection />
        <PartnersSlider />
        <RenovationSection />
        <EstimatedPriceSection />
      </>
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}